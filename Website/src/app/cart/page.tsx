"use client";
import React from "react";
import Container from "@/components/Container";
import DeliveryServices from "@/components/DeliveryServices";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CartPage() {
  return (
    <div className="w-full">
      <PageHero name="Cart" />
      <Container className="p-9">
        <div className="max-w-6xl w-full mx-auto min-h-96 grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 col-span-1 h-full w-full">
            <CartTable />
          </div>
          <div className="container mx-auto col-span-1 bg-[#FFF9E5] h-full flex justify-center items-center flex-col gap-9 max-lg:py-5 max-lg:my-6 w-full">
            <h2 className="font-semibold text-3xl mb-4">Cart Totals</h2>
            <div className="grid grid-cols-3  gap-6">
                <span className="font-medium col-span-1">Subtotal</span><span className="text-[#9F9F9F] col-span-2">Rs. 250,000.00</span>
                <span className="font-medium col-span-1">Total</span><span className="text-[#B88E2F] text-xl col-span-2">Rs. 250,000.00</span>
            </div>
            <Link href="/checkout">
            <Button variant={"fBtn2"} size={'f2'}>Check Out</Button></Link>
          </div>
        </div>
      </Container>
      <DeliveryServices />
    </div>
  );
}

export default CartPage;

const CartTable = () => {

  const cartItems = [
    {
      id: 1,
      image: "/Asgaard sofa 1.png",
      name: "Wireless Headphones",
      price: 99.99,
      quantity: 1,
    },
  ];

  return (
    <div className="container mx-auto p-4 max-sm:overflow-x-scroll">
      <table className="w-full border-collapse ">
        <thead className="mb-4">
          <tr className="bg-[#FFF9E5] font-medium">
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-right">Price</th>
            <th className="p-3 text-center">Quantity</th>
            <th className="p-3 text-right">Subtotal</th>
            <th className="p-3 text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
        <tr className="h-14"></tr>
          {cartItems.map((item) => (
            <tr key={item.id} className="">
              <td className="p-2 bg-[#FBEBB5]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-cover rounded"
                />
              </td>
              <td className="p-3 font-medium">{item.name}</td>
              <td className="p-3 text-right">${item.price.toFixed(2)}</td>
              <td className=" text-center rounded-xl">
                <input
                  
                  min="1"
                  value={item.quantity}
                  className="w-8 py-1 text-center border rounded"
                />
              </td>
              <td className="p-3 text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
              <td className="p-3 text-center">
                <button className="">
                  
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="#FBEBB5"/>
</svg>

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
