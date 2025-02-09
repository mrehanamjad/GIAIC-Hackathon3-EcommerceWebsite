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

  const handleRemoveItem = (id: string,size: string, color: string) => {
    dispatch(removeFromCart({id,color,size}));
  };

  const subtotal = calculateSubtotal();
  //TODO: add shipping, tax calculations :
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
            <CartSummary subtotal={subtotal} total={total} totalCartItons={cartItems.length} />
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
  onRemoveItem: (id: string,size: string, color: string) => void;
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
                  onClick={() => onRemoveItem(item.id,item.size,item.color)}
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
                  <div className="text-6xl">
                  <svg width="38" height="38" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.2356 19.1926H8.95237L9.76995 17.5273L23.3543 17.5027C23.8137 17.5027 24.2074 17.1746 24.2895 16.7207L26.1707 6.19062C26.2199 5.91445 26.1461 5.63008 25.9656 5.41406C25.8765 5.30775 25.7652 5.22211 25.6396 5.16309C25.514 5.10407 25.3771 5.07308 25.2383 5.07227L7.95706 5.01484L7.8094 4.32031C7.71643 3.87734 7.31721 3.55469 6.86331 3.55469H2.6387C2.3827 3.55469 2.13719 3.65638 1.95617 3.8374C1.77516 4.01841 1.67346 4.26393 1.67346 4.51992C1.67346 4.77592 1.77516 5.02143 1.95617 5.20245C2.13719 5.38346 2.3827 5.48516 2.6387 5.48516H6.08127L6.72659 8.55312L8.31526 16.2449L6.26995 19.5836C6.16373 19.727 6.09975 19.8972 6.08526 20.075C6.07076 20.2528 6.10632 20.4312 6.18791 20.5898C6.35198 20.9152 6.68284 21.1203 7.04924 21.1203H8.76643C8.40035 21.6065 8.20261 22.1988 8.20315 22.8074C8.20315 24.3551 9.46096 25.6129 11.0086 25.6129C12.5563 25.6129 13.8141 24.3551 13.8141 22.8074C13.8141 22.1977 13.6117 21.6043 13.2508 21.1203H17.6559C17.2898 21.6065 17.0921 22.1988 17.0926 22.8074C17.0926 24.3551 18.3504 25.6129 19.8981 25.6129C21.4457 25.6129 22.7035 24.3551 22.7035 22.8074C22.7035 22.1977 22.5012 21.6043 22.1403 21.1203H25.2383C25.7688 21.1203 26.2035 20.6883 26.2035 20.1551C26.202 19.8994 26.0993 19.6546 25.9179 19.4743C25.7366 19.294 25.4913 19.1927 25.2356 19.1926ZM8.35901 6.91797L24.1035 6.96992L22.5613 15.6051L10.1938 15.627L8.35901 6.91797ZM11.0086 23.6715C10.5328 23.6715 10.1446 23.2832 10.1446 22.8074C10.1446 22.3316 10.5328 21.9434 11.0086 21.9434C11.4844 21.9434 11.8727 22.3316 11.8727 22.8074C11.8727 23.0366 11.7816 23.2564 11.6196 23.4184C11.4576 23.5805 11.2378 23.6715 11.0086 23.6715ZM19.8981 23.6715C19.4223 23.6715 19.034 23.2832 19.034 22.8074C19.034 22.3316 19.4223 21.9434 19.8981 21.9434C20.3739 21.9434 20.7621 22.3316 20.7621 22.8074C20.7621 23.0366 20.6711 23.2564 20.5091 23.4184C20.347 23.5805 20.1272 23.6715 19.8981 23.6715Z" fill="black"/>
              </svg>
                  </div>
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

const CartSummary = ({ subtotal, total, totalCartItons }: { subtotal: number; total: number; totalCartItons?: number }) => {
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
      <Link href={totalCartItons === 0 ? "" : "/checkout" } className="block">
        <Button 
          disabled={totalCartItons === 0 ? true : false}
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