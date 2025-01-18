"use client";
import React, { useState } from "react";
import { Star, Facebook, Linkedin, Twitter } from "lucide-react";
import { ChevronLeft, ChevronRight, Heart, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "@/components/Container";

const ProductDetail = ({
  name,
  price,
  imagePath,
  description,
  category,
  tags,
  id
}: {
  name: string;
  price: number;
  imagePath: string;
  description: string;
  category?: string;
  tags?: string[];
  id: string;
}) => {

  const [mainImage, setMainImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


  const renderStars = (count = 4.5) => {
    return (
      <div className="flex items-center text-[#FFDA5B]">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(count) ? "fill-current" : "stroke-current"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-[#9F9F9F] flex justify-center items-center gap-2">
          {" "}
          <div className="h-5 w-0.5 bg-[#9F9F9F]"></div> 5 Customer Review
        </span>
      </div>
    );
  };

  return (
    <Container>
      <div className="w-full mx-auto md:px-4 py-8 grid md:grid-cols-2 gap-8">
      <div className="flex gap-4 w-full max-md:flex-col">
      {/* Main Image Container */}
      <div className="md:order-2 flex-1">
        <div 
          className="relative group rounded-2xl overflow-hidden bg-[#FFF9E5]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image */}
          <Image
            src={imagePath}
            alt={name}
            width={1000}
            height={1000}
            className={`w-full h-[32rem] object-cover transition-all duration-500 
                     ${isHovered ? 'scale-105' : 'scale-100'}`}
          />

          {/* Overlay Controls */}
          <div className={`absolute inset-0 transition-opacity duration-300
                        ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {/* Top Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full
                              hover:bg-white transition-all duration-300 group">
                <ZoomIn className="w-5 h-5 transition-colors" />
              </button>
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full
                              hover:bg-white transition-all duration-300 group">
                <Heart className="w-5 h-5 transition-colors group-hover:fill-red-500" />
              </button>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full
                              hover:bg-white transition-all duration-300 group
                              transform -translate-x-2 hover:translate-x-0">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full
                              hover:bg-white transition-all duration-300 group
                              transform translate-x-2 hover:translate-x-0">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="md:w-24 flex md:flex-col gap-4 md:order-1">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => setMainImage(index)}
            className={`relative group overflow-hidden rounded-xl
                      transition-transform duration-300 hover:-translate-y-1
                      ${mainImage === index ? 'ring-2 ring-offset-2 ring-black' : ''}`}
          >
            <Image
              src={imagePath}
              width={100}
              height={100}
              alt={`Product view ${index + 1}`}
              className={`w-24 h-24 object-cover transition-all duration-300 bg-[#FFF9E5]
                        ${mainImage === index ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}
                        group-hover:scale-110`}
            />
          </button>
        ))}
      </div>
    </div>

        {/* Product Details */}
        <div className="space-y-6 md:w-80 w-11/12 max-md:mr-auto py-5 px-2 md:px-5">
          <div className="space-y-2">
            <h1 className="text-4xl ">{name}</h1>
            <div className="text-2xl font-mediam text-[#9F9F9F]">
              Rs. {price?.toFixed(2)}
            </div>
            {renderStars()}
          </div>

          <p className="text-[#242424] text-sm">{description}</p>

          {/* Size Selection */}
          <div>
            <p className="font-medium mb-2">Size</p>
            <div className="flex space-x-2">
              {["L", "XL", "XS"].map((size) => (
                <Button
                  key={size}
                  variant={"outline"}
                  className={`p-2 px-3 border-none outline-none shadow-none text-md ${
                    size == "L" ? "bg-[#FBEBB5]" : "bg-[#FAF4F4]"
                  }`}
                >
                  {" "}
                  {size}{" "}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <p className="font-medium mb-2">Color</p>
            <div className="flex space-x-2">
              {["bg-[#816DFA]", "bg-[#000000]", "bg-[#CDBA7B]"].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 border-transparent  ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg border-black/50">
              <button className="px-3 py-3">-</button>
              <span className="px-4">{1}</span>
              <button className="px-3 py-3">+</button>
            </div>
            <Button variant={"fBtn2"} size={"f2"}>
              Add To Cart
            </Button>
          </div>

          <div className="md:w-96 w-full py-9 border-t text-sm text-[#9F9F9F] border-t-black/50 grid grid-cols-2 gap-2">
            <span>SKU </span>
            <span>: SS00{id}</span>
            <span>Category</span>
            <span>: {category}</span>
            <span>Tags</span>
            <span>:&nbsp;
              {tags?.map((t) => (
                <span key={t}>{t}, </span>
              ))}
            </span>
            <span>Share</span>
            <span className="flex gap-2 py-1">
              :{" "}
              <Facebook
                size={18}
                className="rounded-full bg-black text-white p-1"
              />{" "}
              <Linkedin size={18} className="bg-black text-white p-1" />{" "}
              <Twitter
                size={18}
                className="rounded-full bg-black text-white p-1"
              />{" "}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;


















// "use client";
// import React, { useState } from "react";
// import { Star, Facebook, Linkedin, Twitter, Minus, Plus, Share2, Heart } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Container from "@/components/Container";

// interface ProductDetailProps {
//   name: string;
//   price: number;
//   imagePath: string;
//   description: string;
//   category?: string;
//   tags?: string[];
//   id: string;
// }

// const ProductDetail: React.FC<ProductDetailProps> = ({
//   name,
//   price,
//   imagePath,
//   description,
//   category,
//   tags,
//   id,
// }) => {
//   const [selectedSize, setSelectedSize] = useState("L");
//   const [selectedColor, setSelectedColor] = useState("bg-[#816DFA]");
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);

//   const renderStars = (count = 4.5) => {
//     return (
//       <div className="flex items-center gap-2">
//         <div className="flex text-[#FFDA5B]">
//           {[...Array(5)].map((_, i) => (
//             <Star
//               key={i}
//               className={`h-4 w-4 transition-all ${
//                 i < Math.floor(count) ? "fill-current" : "stroke-current"
//               }`}
//             />
//           ))}
//         </div>
//         <div className="text-sm text-[#9F9F9F] flex items-center gap-2">
//           <div className="h-4 w-px bg-[#9F9F9F]" />
//           <span>5 Customer Reviews</span>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <Container>
//       <div className="w-full mx-auto py-12 grid md:grid-cols-2 gap-12">
//         {/* Image Gallery */}
//         <div className="flex gap-4 w-full max-md:flex-col">
//           <div className="md:order-2 group">
//             <div className="relative overflow-hidden rounded-2xl">
//               <Image
//                 src={imagePath}
//                 alt={name}
//                 width={1000}
//                 height={1000}
//                 className="w-full h-[32rem] bg-[#FFF9E5] object-cover transition-transform duration-500 
//                          group-hover:scale-105"
//               />
//               <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full
//                                opacity-0 group-hover:opacity-100 transition-all duration-300
//                                hover:bg-white">
//                 <Heart className="w-5 h-5 hover:fill-red-500 transition-colors" />
//               </button>
//             </div>
//           </div>

//           {/* Thumbnail Gallery */}
//           <div className="flex md:flex-col md:justify-start gap-4 md:order-1 
//                        max-md:overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
//             {[0, 1, 2, 3].map((index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`relative group/thumb transition-transform hover:-translate-y-1 duration-300
//                           ${selectedImage === index ? "ring-2 ring-black" : ""}`}
//               >
//                 <Image
//                   src={imagePath}
//                   width={100}
//                   height={100}
//                   alt={`Product view ${index + 1}`}
//                   className={`w-24 h-24 object-cover rounded-xl transition-opacity duration-300 
//                            bg-[#FFF9E5] ${
//                              selectedImage === index ? "opacity-100" : "opacity-70 group-hover/thumb:opacity-100"
//                            }`}
//                 />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="space-y-8 max-w-xl">
//           {/* Header Section */}
//           <div className="space-y-4">
//             <h1 className="text-4xl font-semibold tracking-tight">{name}</h1>
//             <div className="text-3xl font-medium text-[#9F9F9F]">
//               Rs. {price.toFixed(2)}
//             </div>
//             {renderStars()}
//           </div>

//           {/* Description */}
//           <p className="text-[#242424] leading-relaxed">{description}</p>

//           {/* Size Selection */}
//           <div className="space-y-3">
//             <p className="font-medium">Size</p>
//             <div className="flex gap-3">
//               {["L", "XL", "XS"].map((size) => (
//                 <Button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   variant="outline"
//                   className={`px-6 py-3 transition-all duration-300 hover:scale-105 
//                            ${size === selectedSize 
//                              ? "bg-[#FBEBB5] border-[#FBEBB5]" 
//                              : "bg-[#FAF4F4] border-transparent"}`}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {/* Color Selection */}
//           <div className="space-y-3">
//             <p className="font-medium">Color</p>
//             <div className="flex gap-3">
//               {[
//                 "bg-[#816DFA]",
//                 "bg-[#000000]",
//                 "bg-[#CDBA7B]"
//               ].map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`w-10 h-10 rounded-full transition-transform hover:scale-110 duration-300
//                            ${color} ${
//                              selectedColor === color 
//                                ? "ring-2 ring-offset-2 ring-black" 
//                                : ""
//                            }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Quantity and Add to Cart */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center border rounded-xl border-black/20 overflow-hidden">
//               <button 
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="px-4 py-3 hover:bg-gray-50 transition-colors"
//               >
//                 <Minus className="w-4 h-4" />
//               </button>
//               <span className="px-6 font-medium">{quantity}</span>
//               <button 
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="px-4 py-3 hover:bg-gray-50 transition-colors"
//               >
//                 <Plus className="w-4 h-4" />
//               </button>
//             </div>
//             <Button 
//               variant="fBtn2" 
//               size="f2"
//               className="flex-1 transition-transform hover:scale-[1.02] active:scale-[0.98]"
//             >
//               Add To Cart
//             </Button>
//           </div>

//           {/* Product Info */}
//           <div className="pt-8 border-t border-black/10 grid grid-cols-2 gap-y-4 text-sm">
//             <span className="text-[#9F9F9F]">SKU</span>
//             <span>SS00{id}</span>
//             <span className="text-[#9F9F9F]">Category</span>
//             <span>{category}</span>
//             <span className="text-[#9F9F9F]">Tags</span>
//             <span>{tags?.join(", ")}</span>
//             <span className="text-[#9F9F9F]">Share</span>
//             <div className="flex gap-2">
//               {[Facebook, Linkedin, Twitter].map((Icon, index) => (
//                 <button 
//                   key={index}
//                   className="p-2 rounded-full bg-black text-white hover:bg-gray-800 
//                            transition-colors duration-300"
//                 >
//                   <Icon size={16} />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ProductDetail;
