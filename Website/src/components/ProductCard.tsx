"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { useAppDispatch } from "@/lib/store/hooks";
import { addToWishlist, removeFromWishlist } from "@/lib/store/features/wishlist/wishlistSlice";
import { Button } from "./ui/button";

interface ProductCardProps {
  imagePath: string;
  name: string;
  price: number;
  id: string;
  isWishlistPg?: boolean;
  view?: 'grid' | 'list';
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  imagePath, 
  name, 
  price, 
  id,
  isWishlistPg = false,
  view = 'grid',
  description = "Product description not available"
}) => {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    isWishlistPg ? dispatch(removeFromWishlist(id)) : dispatch(addToWishlist({id, name, price, imagePath}));
  };

  // Sizes prop for the images
  const imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  if (view === 'list') {
    return (
      <div 
        className="w-full relative group mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/shop/${id}`} className="block">
          <div className="p-4 bg-white group-hover:bg-[#FAF4F4] 
                        transition-all duration-300 ease-in-out
                        shadow-sm group-hover:shadow-md relative">
            <div className="flex gap-6">
              {/* Image */}
              <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden">
                <Image 
                  src={imagePath} 
                  alt={name}
                  fill
                  sizes={imageSizes}  // Added sizes prop
                  className="object-cover object-center transition-transform duration-500 
                           group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow justify-between py-2">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-black">{name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
                  <p className="text-2xl font-bold text-black">RS. {price}</p>
                </div>
                
                <div className="">
                  <Button
                    variant="outline"
                    onClick={handleWishlistClick}
                    className="bg-[#FBEBB5] hover:bg-[#FBEBB5]/80 px-8 py-6 "
                  >
                    {isWishlistPg ? <Trash2 className="w-4 h-4 mr-2" /> : <Heart className="w-4 h-4 mr-2" />}
                    {isWishlistPg ? 'Remove' : 'Wishlist'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  // Grid view (existing code)
  return (
    <div 
      className="w-72 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/shop/${id}`} className="block">
        <div className="h-96 p-4 bg-white group-hover:bg-[#FAF4F4] flex flex-col gap-4 
                      transition-all duration-300 ease-in-out transform group-hover:-translate-y-1
                      shadow-sm group-hover:shadow-md relative">
          <div className="relative aspect-square w-full flex-shrink-0 overflow-hidden">
            <Image 
              src={imagePath} 
              alt={name} 
              fill
              sizes={imageSizes}  // Added sizes prop
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

          <button
            onClick={handleWishlistClick}
            className={`absolute top-6 right-6 p-2 rounded-full
                     transition-all duration-300 transform bg-slate-200
                     ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
                     shadow-md hover:shadow-lg`}
          >
            {isWishlistPg ? 
              <Trash2 className="w-5 h-5 transition-all duration-300 hover:text-red-700" /> : 
              <Heart className="w-5 h-5 transition-all duration-300 active:text-red-700"/>
            }
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
