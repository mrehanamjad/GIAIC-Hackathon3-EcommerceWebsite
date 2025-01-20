// "use client";
// import React from "react";
// import Container from "@/components/Container";
// import DeliveryServices from "@/components/DeliveryServices";
// import PageHero from "@/components/PageHero";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// function CartPage() {
//   return (
//     <div className="w-full">
//       <PageHero name="Cart" />
//       <Container className="p-9">
//         <div className="max-w-6xl w-full mx-auto min-h-96 grid grid-cols-1 lg:grid-cols-3">
//           <div className="lg:col-span-2 col-span-1 h-full w-full">
//             <CartTable />
//           </div>
//           <div className="container mx-auto col-span-1 bg-[#FFF9E5] h-full flex justify-center items-center flex-col gap-9 max-lg:py-5 max-lg:my-6 w-full">
//             <h2 className="font-semibold text-3xl mb-4">Cart Totals</h2>
//             <div className="grid grid-cols-3  gap-6">
//                 <span className="font-medium col-span-1">Subtotal</span><span className="text-[#9F9F9F] col-span-2">Rs. 250,000.00</span>
//                 <span className="font-medium col-span-1">Total</span><span className="text-[#B88E2F] text-xl col-span-2">Rs. 250,000.00</span>
//             </div>
//             <Link href="/checkout">
//             <Button variant={"fBtn2"} size={'f2'}>Check Out</Button></Link>
//           </div>
//         </div>
//       </Container>
//       <DeliveryServices />
//     </div>
//   );
// }

// export default CartPage;

// const CartTable = () => {

//   const cartItems = [
//     {
//       id: 1,
//       image: "/Asgaard sofa 1.png",
//       name: "Wireless Headphones",
//       price: 99.99,
//       quantity: 1,
//     },
//   ];

//   return (
//     <div className="container mx-auto p-4 max-sm:overflow-x-scroll">
//       <table className="w-full border-collapse ">
//         <thead className="mb-4">
//           <tr className="bg-[#FFF9E5] font-medium">
//             <th className="p-3 text-left">Image</th>
//             <th className="p-3 text-left">Product</th>
//             <th className="p-3 text-right">Price</th>
//             <th className="p-3 text-center">Quantity</th>
//             <th className="p-3 text-right">Subtotal</th>
//             <th className="p-3 text-center">Remove</th>
//           </tr>
//         </thead>
//         <tbody>
//         <tr className="h-14"></tr>
//           {cartItems.map((item) => (
//             <tr key={item.id} className="">
//               <td className="p-2 bg-[#FBEBB5]">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={100}
//                   height={100}
//                   className="w-20 h-20 object-cover rounded"
//                 />
//               </td>
//               <td className="p-3 font-medium">{item.name}</td>
//               <td className="p-3 text-right">${item.price.toFixed(2)}</td>
//               <td className=" text-center rounded-xl">
//                 <input
                  
//                   min="1"
//                   value={item.quantity}
//                   className="w-8 py-1 text-center border rounded"
//                 />
//               </td>
//               <td className="p-3 text-right">
//                 ${(item.price * item.quantity).toFixed(2)}
//               </td>
//               <td className="p-3 text-center">
//                 <button className="">
                  
// <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="#FBEBB5"/>
// </svg>

//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };














"use client"
import React from "react";
import Container from "@/components/Container";
import DeliveryServices from "@/components/DeliveryServices";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { removeFromCart, updateQuantity } from "@/lib/store/features/cart/cartSlice";
import { CartItem } from "@/lib/types";


function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleQuantityChange = (id: string, size:string, color:string, quantity:number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({id,size,color,quantity}));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = calculateSubtotal();
  // You could add shipping, tax calculations here
  const total = subtotal;

  return (
    <div className="w-full">
      <PageHero name="Cart" />
      <Container className="p-9">
        <div className="max-w-6xl w-full mx-auto min-h-96 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 col-span-1">
            <CartTable
              cartItems={cartItems}
              onQuantityChange={handleQuantityChange}
              onRemoveItem={handleRemoveItem}
            />
          </div>
          <div className="col-span-1">
            <CartSummary subtotal={subtotal} total={total} />
          </div>
        </div>
      </Container>
      <DeliveryServices />
    </div>
  );
}

const CartTable = ({
  cartItems,
  onQuantityChange,
  onRemoveItem
}: {
  cartItems: CartItem[];
  onQuantityChange: (id: string, size: string, color: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-sm">
      <table className="w-full border-collapse min-w-[800px]">
        <thead>
          <tr className="bg-[#FFF9E5]">
            <th className="p-4 text-left font-medium w-[300px]">Product</th>
            <th className="p-4 text-center font-medium">Size</th>
            <th className="p-4 text-center font-medium">Color</th>
            <th className="p-4 text-right font-medium">Price</th>
            <th className="p-4 text-center font-medium">Quantity</th>
            <th className="p-4 text-right font-medium">Subtotal</th>
            <th className="p-4 text-center font-medium w-[80px]">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {cartItems.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="p-4">
                <div className="flex items-center gap-6">
                  <div className="bg-[#FBEBB5] p-2 rounded-lg w-[100px] h-[100px] flex items-center justify-center">
                    <Image
                      src={item.imagePath}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-contain rounded-md w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-lg">{item.name}</span>
                    <span className="text-sm text-gray-500">#{item.id}</span>
                  </div>
                </div>
              </td>
              <td className="p-4 text-center">
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {item.size}
                </span>
              </td>
              <td className="p-4 text-center">
                <div className="flex justify-center items-center">
                  <div
                    className={`w-6 h-6 rounded-full border border-gray-200`}
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </td>
              <td className="p-4 text-right text-gray-600">
                ${item.price.toFixed(2)}
              </td>
              <td className="p-4">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => onQuantityChange(item.id, item.size, item.color, item.quantity - 1)}
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => onQuantityChange(item.id, item.size, item.color, parseInt(e.target.value) || 1)}
                    className="w-14 text-center border rounded-md py-1.5 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]/20"
                  />
                  <button
                    onClick={() => onQuantityChange(item.id, item.size, item.color, item.quantity + 1)}
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </td>
              <td className="p-4 text-right font-medium text-[#B88E2F]">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
              <td className="p-4 text-center">
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-2 hover:bg-red-50 rounded-full transition-colors group"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5 text-red-500 group-hover:text-red-600" />
                </button>
              </td>
            </tr>
          ))}
          {cartItems.length === 0 && (
            <tr>
              <td colSpan={7} className="p-8 text-center text-gray-500">
                <div className="flex flex-col items-center gap-4">
                  <div className="text-6xl">🛒</div>
                  <div className="text-lg">Your cart is empty</div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => window.history.back()}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const CartSummary = ({ subtotal, total }: { subtotal: number; total: number }) => {
  return (
    <div className="bg-[#FFF9E5] p-6 rounded-lg shadow-sm">
      <h2 className="font-semibold text-2xl mb-6">Cart Summary</h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-[#9F9F9F]">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t">
          <span className="font-medium">Total</span>
          <span className="text-[#B88E2F] text-xl font-medium">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
      <Link href="/checkout" className="block">
        <Button 
          variant="fBtn2" 
          size="f2"
          className="w-full transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Proceed to Checkout
        </Button>
      </Link>
    </div>
  );
};

export default CartPage;