import React from "react";
import ProductCard from "../ProductCard";
import Container from "../Container";
import { Button } from "../ui/button";
interface ProductI {
  id: string;
  name: string;
  imagePath: string;
  price: number;
}

interface AllProductsProps {
  products: ProductI[]; // Accept `products` as a prop
}


 function AllProducts({products}:AllProductsProps) {
  
  return (
    <section>
      <Container>
        <div className="w-full grid  grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {products.map((product, index) => (
            <div key={index} className="mx-auto">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <PageNavigateBtns />
      </Container>
    </section>
  );
}

export default AllProducts;

export const PageNavigateBtns = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <div
      className={`flex justify-center items-center gap-3 mt-10 mb-16 ${className}`}
    >
      <Button
        size={"icon"}
        className="bg-[#FBEBB5] hover:bg-[#FBEBB5]/30 text-black"
      >
        1
      </Button>
      <Button
        size={"icon"}
        className="bg-[#FFF9E5] hover:bg-[#FFF9E5]/50 text-black"
      >
        2
      </Button>
      <Button
        size={"icon"}
        className="bg-[#FFF9E5] hover:bg-[#FFF9E5]/50 text-black"
      >
        3
      </Button>
      <Button
        size={"icon"}
        className="bg-[#FFF9E5] hover:bg-[#FFF9E5]/50 text-black px-7"
      >
        Next
      </Button>
    </div>
  );
};
