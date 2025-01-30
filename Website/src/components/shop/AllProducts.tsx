"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import Container from "../Container";
import { Button } from "../ui/button";
import FilterSidebar from "./FilterSidebar";
import ProductFilterBar from "./ProductFilterBar";
import { Search } from "lucide-react";

interface ProductI {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  category: string;
}

interface AllProductsProps {
  products: ProductI[];
}

function AllProducts({ products }: AllProductsProps) {
  const [showSideFilterBar, setShowSideFilterBar] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<{
    min?: string;
    max?: string;
  }>({ min: "", max: "" });
  const [filteredProducts, setFilteredProducts] = useState<ProductI[]>(products);
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("Default");

  // Debounce search function
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const performSearch = debounce((searchTerm: string) => {
    setSearch(searchTerm);
  }, 300);

  useEffect(() => {
    if (!Array.isArray(products)) {
      console.error("Products is not an array:", products);
      return;
    }

    try {
      let result = [...products];

      // Category filtering
      if (selectedCategories.length > 0) {
        result = result.filter((product) =>
          selectedCategories.includes(product.category.toLowerCase())
        );
      }

      // Search filtering - improved with error handling and normalization
      if (search.trim().length > 0) {
        const searchTerms = search.toLowerCase().trim().split(" ");
        result = result.filter((product) => {
          const productName = (product.name || "").toLowerCase();
          return searchTerms.every(term => productName.includes(term));
        });
        setSearchError(result.length === 0);
      } else {
        setSearchError(false);
      }

      // Price range filtering
      if (selectedPriceRange.min?.length !== 0) {
        const minPrice = parseFloat(selectedPriceRange.min!);
        if (!isNaN(minPrice)) {
          result = result.filter((product) => product.price >= minPrice);
        }
      }

      if (selectedPriceRange.max?.length !== 0) {
        const maxPrice = parseFloat(selectedPriceRange.max!);
        if (!isNaN(maxPrice)) {
          result = result.filter((product) => product.price <= maxPrice);
        }
      }

      // Sorting - with improved type safety
      result = [...result].sort((a, b) => {
        switch (sortBy) {
          case "Price Low-High":
            return (a.price || 0) - (b.price || 0);
          case "Price High-Low":
            return (b.price || 0) - (a.price || 0);
          case "Newest":
            return (a.id || "").localeCompare(b.id || "");
          default:
            return 0;
        }
      });

      setFilteredProducts(result);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error filtering products:", error);
      setFilteredProducts([]);
      setSearchError(true);
    }
  }, [products, selectedCategories, selectedPriceRange, sortBy, search]);

  const handleCategoryFilterChange = (category: string) => {
    setSelectedCategories((prev) => {
      const categoryL = category.toLowerCase();
      return prev.includes(categoryL)
        ? prev.filter((cat) => cat !== categoryL)
        : [...prev, categoryL];
    });
  };

  const handlePriceRangeFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value ? e.target.value : "";
    setSelectedPriceRange((prev) => ({
      ...prev,
      [e.target.name === "min-price" ? "min" : "max"]: value,
    }));
  };

  const HandleClearAllFilter = () => {
    setSelectedCategories([]);
    setSelectedPriceRange({ min: "", max: "" });
  };

  const categories = Array.from(
    new Set(products.map((product) => product.category.toLowerCase()))
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section>
       <ProductFilterBar
        showSideFilterBarFunc={() => setShowSideFilterBar((prev) => !prev)}
        onViewChange={setView}
        onItemsPerPageChange={setItemsPerPage}
        onSortChange={setSortBy}
        onSearchChange={performSearch}
        totalItems={filteredProducts.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        view={view}
      />
      <Container>
        <div className="flex relative">
          <FilterSidebar
            showOnSmallDivices={showSideFilterBar}
            categories={categories}
            selectedCategories={selectedCategories}
            handelCategoryFilter={handleCategoryFilterChange}
            handlePriceFilter={handlePriceRangeFilterChange}
            handleClearFilters={HandleClearAllFilter}
            priceRange={selectedPriceRange}
          />
          {paginatedProducts.length > 0 ? (
            <div
              className={`w-full grid gap-1 ${ view === "grid" ? "grid-cols-1 md:grid-cols-3 sm:grid-cols-2" : "grid-cols-1"}`}
            >
              {paginatedProducts.map((product) => (
                <div key={product.id} className="md:mx-10 mx-auto">
                  <ProductCard {...product} view={view} />
                </div>
              ))}
            </div>
          ) : searchError ? (
            <div className="w-full h-full flex flex-col justify-center items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
              <Search size={56} />
              <h2 className="text-center text-gray-700 font-semibold text-lg">
                No search results found.
              </h2>
              <p className="text-center text-gray-500 max-w-md">
                Sorry, we couldn’t find any results matching your search.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => setSearch("")}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-500 transition-all duration-300"
                >
                  New Search
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center gap-4 p-4">
              {/* Error Message */}
              <h2 className="text-red-600 font-semibold text-lg">
                Oops! Something went wrong.
              </h2>
              <p className="text-gray-600 text-center">
                We&apos;re unable to process your request right now. Please try again
                later.
              </p>

              {/* Retry Button */}
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition"
              >
                Retry
              </button>
            </div>
          )}
        </div>
        <PageNavigateBtns
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </Container>
    </section>
  );
}

export default AllProducts;

interface PageNavigateBtnsProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const PageNavigateBtns = ({
  className = "",
  currentPage,
  totalPages,
  onPageChange,
}: PageNavigateBtnsProps) => {
  return (
    <div
      className={`flex justify-center items-center gap-3 mt-10 mb-16 ${className}`}
    >
      {totalPages && Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map(
        (page) => (
          <Button
            key={page}
            size={"icon"}
            className={`${
              currentPage === page
                ? "bg-[#FBEBB5] hover:bg-[#FBEBB5]/30"
                : "bg-[#FFF9E5] hover:bg-[#FFF9E5]/50"
            } text-black`}
            onClick={() => onPageChange &&  onPageChange(page)}
          >
            {page}
          </Button>
        )
      )}
      {currentPage && totalPages && currentPage < totalPages && (
        <Button
          size={"icon"}
          className="bg-[#FFF9E5] hover:bg-[#FFF9E5]/50 text-black px-7"
          onClick={() => onPageChange && onPageChange(currentPage + 1)}
        >
          Next
        </Button>
      )}
    </div>
  );
};
