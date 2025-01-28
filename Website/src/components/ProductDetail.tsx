// "use client";
// import React, { useState } from "react";
// import { Star, Facebook, Linkedin, Twitter } from "lucide-react";
// import { ChevronLeft, ChevronRight, Heart, ZoomIn } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Container from "@/components/Container";

// const ProductDetail = ({
//   name,
//   price,
//   imagePath,
//   description,
//   category,
//   tags,
//   id
// }: {
//   name: string;
//   price: number;
//   imagePath: string;
//   description: string;
//   category?: string;
//   tags?: string[];
//   id: string;
// }) => {

//   const [mainImage, setMainImage] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);


//   const renderStars = (count = 4.5) => {
//     return (
//       <div className="flex items-center text-[#FFDA5B]">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             className={`h-4 w-4 ${
//               i < Math.floor(count) ? "fill-current" : "stroke-current"
//             }`}
//           />
//         ))}
//         <span className="ml-2 text-sm text-[#9F9F9F] flex justify-center items-center gap-2">
//           {" "}
//           <div className="h-5 w-0.5 bg-[#9F9F9F]"></div> 5 Customer Review
//         </span>
//       </div>
//     );
//   };

//   return (
//     <Container>
//       <div className="w-full mx-auto md:px-4 py-8 grid md:grid-cols-2 gap-8">
//       <div className="flex gap-4 w-full max-md:flex-col">
//       {/* Main Image Container */}
//       <div className="md:order-2 flex-1">
//         <div 
//           className="relative group rounded-2xl overflow-hidden bg-[#FFF9E5]"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Main Image */}
//           <Image
//             src={imagePath}
//             alt={name}
//             width={1000}
//             height={1000}
//             className={`w-full h-[32rem] object-cover transition-all duration-500 
//                      ${isHovered ? 'scale-105' : 'scale-100'}`}
//           />

//           {/* Overlay Controls */}
//           <div className={`absolute inset-0 transition-opacity duration-300
//                         ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//             {/* Top Controls */}
//             <div className="absolute top-4 right-4 flex gap-2">
//               <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full
//                               hover:bg-white transition-all duration-300 group">
//                 <ZoomIn className="w-5 h-5 transition-colors" />
//               </button>
//               <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full
//                               hover:bg-white transition-all duration-300 group">
//                 <Heart className="w-5 h-5 transition-colors group-hover:fill-red-500" />
//               </button>
//             </div>

//             {/* Navigation Arrows */}
//             <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
//               <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full
//                               hover:bg-white transition-all duration-300 group
//                               transform -translate-x-2 hover:translate-x-0">
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full
//                               hover:bg-white transition-all duration-300 group
//                               transform translate-x-2 hover:translate-x-0">
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Thumbnail Strip */}
//       <div className="md:w-24 flex md:flex-col gap-4 md:order-1">
//         {[0, 1, 2, 3].map((index) => (
//           <button
//             key={index}
//             onClick={() => setMainImage(index)}
//             className={`relative group overflow-hidden rounded-xl
//                       transition-transform duration-300 hover:-translate-y-1
//                       ${mainImage === index ? 'ring-2 ring-offset-2 ring-black' : ''}`}
//           >
//             <Image
//               src={imagePath}
//               width={100}
//               height={100}
//               alt={`Product view ${index + 1}`}
//               className={`w-24 h-24 object-cover transition-all duration-300 bg-[#FFF9E5]
//                         ${mainImage === index ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}
//                         group-hover:scale-110`}
//             />
//           </button>
//         ))}
//       </div>
//     </div>

//         {/* Product Details */}
//         <div className="space-y-6 md:w-80 w-11/12 max-md:mr-auto py-5 px-2 md:px-5">
//           <div className="space-y-2">
//             <h1 className="text-4xl ">{name}</h1>
//             <div className="text-2xl font-mediam text-[#9F9F9F]">
//               Rs. {price?.toFixed(2)}
//             </div>
//             {renderStars()}
//           </div>

//           <p className="text-[#242424] text-sm">{description}</p>

//           {/* Size Selection */}
//           <div>
//             <p className="font-medium mb-2">Size</p>
//             <div className="flex space-x-2">
//               {["L", "XL", "XS"].map((size) => (
//                 <Button
//                   key={size}
//                   variant={"outline"}
//                   className={`p-2 px-3 border-none outline-none shadow-none text-md ${
//                     size == "L" ? "bg-[#FBEBB5]" : "bg-[#FAF4F4]"
//                   }`}
//                 >
//                   {" "}
//                   {size}{" "}
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {/* Color Selection */}
//           <div>
//             <p className="font-medium mb-2">Color</p>
//             <div className="flex space-x-2">
//               {["bg-[#816DFA]", "bg-[#000000]", "bg-[#CDBA7B]"].map((color) => (
//                 <button
//                   key={color}
//                   className={`w-8 h-8 rounded-full border-2 border-transparent  ${color}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Quantity and Add to Cart */}
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center border rounded-lg border-black/50">
//               <button className="px-3 py-3">-</button>
//               <span className="px-4">{1}</span>
//               <button className="px-3 py-3">+</button>
//             </div>
//             <Button variant={"fBtn2"} size={"f2"}>
//               Add To Cart
//             </Button>
//           </div>

//           <div className="md:w-96 w-full py-9 border-t text-sm text-[#9F9F9F] border-t-black/50 grid grid-cols-2 gap-2">
//             <span>SKU </span>
//             <span>: SS00{id}</span>
//             <span>Category</span>
//             <span>: {category}</span>
//             <span>Tags</span>
//             <span>:&nbsp;
//               {tags?.map((t) => (
//                 <span key={t}>{t}, </span>
//               ))}
//             </span>
//             <span>Share</span>
//             <span className="flex gap-2 py-1">
//               :{" "}
//               <Facebook
//                 size={18}
//                 className="rounded-full bg-black text-white p-1"
//               />{" "}
//               <Linkedin size={18} className="bg-black text-white p-1" />{" "}
//               <Twitter
//                 size={18}
//                 className="rounded-full bg-black text-white p-1"
//               />{" "}
//             </span>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ProductDetail;










'use client'
import React, { useState } from "react";
import { Star, Facebook, Linkedin, Twitter } from "lucide-react";
import { ChevronLeft, ChevronRight, Heart, ZoomIn, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "@/components/Container";
import { useAppDispatch } from "@/lib/store/hooks";
import { addToCart } from "@/lib/store/features/cart/cartSlice";

const ProductDetail = ({
  name,
  price,
  imagePath,
  description,
  category,
  tags,
  id,
  images = [] // Array of image paths
}: {
  name: string;
  price: number;
  imagePath: string;
  description: string;
  category?: string;
  tags?: string[];
  id: string;
  images?: string[];
}) => {

  const dispatch = useAppDispatch();


  // State management
  const [mainImage, setMainImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("bg-[#816DFA]");
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  // Image gallery handling
  const imageArray = images.length > 0 ? images : Array(4).fill(imagePath);
  const nextImage = () => setMainImage((prev) => (prev + 1) % imageArray.length);
  const prevImage = () => setMainImage((prev) => (prev - 1 + imageArray.length) % imageArray.length);

  // Quantity handlers
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev =>  prev - 1);

  const handleAddToCart = () => {

    dispatch(addToCart({
     id,
     name,
     price,
     imagePath,
     quantity,
     size: selectedSize,
     color: colors.find(color => color.value == selectedColor)?.label as string
    }));


  };

  const handleShare = (platform: string) => {
    // Implement share functionality
    console.log(`Sharing on ${platform}`);
  };

  const renderStars = (count = 4.5) => {
    return (
      <div className="flex items-center text-[#FFDA5B]">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(count) ? "fill-current" : "stroke-current"
            } transition-colors duration-300`}
          />
        ))}
        <span className="ml-2 text-sm text-[#9F9F9F] flex justify-center items-center gap-2">
          <div className="h-5 w-0.5 bg-[#9F9F9F]"></div> 5 Customer Review
        </span>
      </div>
    );
  };

  const sizes = ["L", "XL", "XS"];
  const colors = [
    { value: "bg-[#816DFA]", label: "Purple" },
    { value: "bg-[#000000]", label: "Black" },
    { value: "bg-[#CDBA7B]", label: "Gold" }
  ];

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
              <Image
                src={imageArray[mainImage]}
                alt={name}
                width={1000}
                height={1000}
                className={`w-full h-[32rem] object-cover transition-all duration-500 
                         ${isHovered ? 'scale-105' : 'scale-100'}`}
              />

              {/* Overlay Controls */}
              <div className={`absolute inset-0 transition-opacity duration-300
                            ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full
                              hover:bg-white transition-all duration-300 group"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors ${isLiked ? 'fill-red-500' : ''}`}
                    />
                  </button>
                </div>

                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                  <button 
                    onClick={prevImage}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full
                              hover:bg-white transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full
                              hover:bg-white transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="md:w-24 flex md:flex-col gap-4 md:order-1">
            {imageArray.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(index)}
                className={`relative group overflow-hidden rounded-xl
                          transition-transform duration-300 hover:-translate-y-1
                          ${mainImage === index ? 'ring-2 ring-offset-2 ring-black' : ''}`}
              >
                <Image
                  src={img}
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
            <h1 className="text-4xl">{name}</h1>
            <div className="text-2xl font-medium text-[#9F9F9F]">
              Rs. {price.toFixed(2)}
            </div>
            {renderStars()}
          </div>

          <p className="text-[#242424] text-sm">{description}</p>

          {/* Size Selection */}
          <div>
            <p className="font-medium mb-2">Size</p>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  variant="outline"
                  className={`p-2 px-3 border-none outline-none shadow-none text-md 
                            transition-all duration-300
                            ${selectedSize === size ? "bg-[#FBEBB5]" : "bg-[#FAF4F4]"}`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <p className="font-medium mb-2">Color</p>
            <div className="flex space-x-2">
              {colors.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setSelectedColor(value)}
                  className={`w-8 h-8 rounded-full transition-transform duration-300
                            hover:scale-110 ${value} ${
                    selectedColor === value ? "ring-2 ring-offset-2 ring-black" : ""
                  }`}
                  aria-label={label}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg border-black/50">
              <button 
                onClick={decrementQuantity}
                className="px-3 py-3 hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 min-w-[2rem] text-center">{quantity}</span>
              <button 
                onClick={incrementQuantity}
                className="px-3 py-3 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <Button 
              variant="fBtn2" 
              size="f2"
              onClick={handleAddToCart}
              className="transition-transform hover:scale-105 active:scale-95"
            >
              Add To Cart
            </Button>
          </div>

          <div className="md:w-96 w-full py-9 border-t text-sm text-[#9F9F9F] border-t-black/50 grid grid-cols-2 gap-2">
            <span>SKU</span>
            <span>: SS00{id}</span>
            <span>Category</span>
            <span>: {category}</span>
            <span>Tags</span>
            <span>: {tags?.join(", ")}</span>
            <span>Share</span>
            <span className="flex gap-2 py-1">
              :
              {[
                { Icon: Facebook, platform: "Facebook" },
                { Icon: Linkedin, platform: "LinkedIn" },
                { Icon: Twitter, platform: "Twitter" }
              ].map(({ Icon, platform }) => (
                <button
                  key={platform}
                  onClick={() => handleShare(platform)}
                  className="rounded-full bg-black text-white p-1 hover:bg-gray-800 
                           transition-colors duration-300"
                >
                  <Icon size={18} />
                </button>
              ))}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;