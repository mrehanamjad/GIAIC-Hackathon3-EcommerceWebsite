import React from "react";
import DeliveryServices from "@/components/DeliveryServices";
import PageHero from "@/components/PageHero";
import AllProducts from "@/components/shop/AllProducts";
import { client } from "@/sanity/lib/client";

interface ProductI {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  category:string;
}

async function getProducts() {
  try {
    const products = await client.fetch(
      `*[_type == "product"]{id,name,imagePath,price,category}`
    );
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ShopPage() {
  try {
    const products: ProductI[] = await getProducts();
    if (!products || products.length === 0) {
      return <div>No products available</div>;
    }
    return (
      <div className="w-full">
        <PageHero name="Shop" />
        <AllProducts products={products} />
        <DeliveryServices />
      </div>
    );
  } catch (error) {
    console.error("Error loading shop page:", error);
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-4 p-4">
          {/* Error Message */}
          <h2 className="text-red-600 font-semibold text-lg">
            Oops! Something went wrong.
          </h2>
          <p className="text-gray-600 text-center">
          Error loading products. Please try again later.
          </p>

          {/* Retry Button */}
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition"
          >
            Retry
          </button>
        </div>
      
    );
  }
};
