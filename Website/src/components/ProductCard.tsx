import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  imagePath: string;
  name: string;
  price: number;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imagePath, name, price, id }) => {
  return (
    <Link href={`/shop/${id}`} className="block group">
      <div className="w-72 h-96 p-4 bg-white group-hover:bg-[#FAF4F4] flex flex-col gap-4 
                    transition-all duration-300 ease-in-out transform group-hover:-translate-y-1
                    shadow-sm group-hover:shadow-md">
        <div className="relative aspect-square w-full flex-shrink-0 overflow-hidden">
          <Image 
            src={imagePath} 
            alt={name} 
            fill
            className="object-cover object-center transition-transform duration-500 
                       group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 
                        transition-colors duration-300"/>
        </div>
        <div className="flex flex-col flex-grow justify-between">
          <h3 className="text-black/80 line-clamp-2 text-base 
                       transform transition-colors duration-300
                       group-hover:text-black">{name}</h3>
          <p className="text-xl font-bold transition-transform duration-300 
                       group-hover:translate-x-1">
            RS. {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;