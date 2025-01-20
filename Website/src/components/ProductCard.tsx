// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// interface ProductCardProps {
//   imagePath: string;
//   name: string;
//   price: number;
//   id: string;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ imagePath, name, price, id }) => {
//   return (
//     <Link href={`/shop/${id}`} className="block group">
//       <div className="w-72 h-96 p-4 bg-white group-hover:bg-[#FAF4F4] flex flex-col gap-4 
//                     transition-all duration-300 ease-in-out transform group-hover:-translate-y-1
//                     shadow-sm group-hover:shadow-md">
//         <div className="relative aspect-square w-full flex-shrink-0 overflow-hidden">
//           <Image 
//             src={imagePath} 
//             alt={name} 
//             fill
//             className="object-cover object-center transition-transform duration-500 
//                        group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 
//                         transition-colors duration-300"/>
//         </div>
//         <div className="flex flex-col flex-grow justify-between">
//           <h3 className="text-black/80 line-clamp-2 text-base 
//                        transform transition-colors duration-300
//                        group-hover:text-black">{name}</h3>
//           <p className="text-xl font-bold transition-transform duration-300 
//                        group-hover:translate-x-1">
//             RS. {price}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;




"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { useAppDispatch } from "@/lib/store/hooks";
import { addToWishlist } from "@/lib/store/features/wishlist/wishlistSlice";

interface ProductCardProps {
  imagePath: string;
  name: string;
  price: number;
  id: string;
  isWishlisted?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  imagePath, 
  name, 
  price, 
  id,
  isWishlisted = false,
}) => {

  const dispatch = useAppDispatch()

  const [isHovered, setIsHovered] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    dispatch(addToWishlist({id, name, price, imagePath}));
  };

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

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className={`absolute top-6 right-6 p-2 rounded-full
                     transition-all duration-300 transform bg-slate-200
                     ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
                     shadow-md hover:shadow-lg`}
          >
            <Heart 
              className={`w-5 h-5 transition-all duration-300 active:text-red-700`}
            />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;