"use client";
import Container from "@/components/Container";
import DeliveryServices from "@/components/DeliveryServices";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clearCart } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {  CreditCard,  Building2, Truck } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import {client} from "@/sanity/lib/client"
import { nanoid } from 'nanoid';
import { useRouter } from "next/navigation";


export interface CheckoutFormValues {
  // Billing details
  firstName: string
  lastName: string
  address: string
  city: string
  province: string
  zipCode: string
  country: string
  phone: string
  email: string

  // Payment method
  paymentMethod: "Credit Card" | "Bank Transfer" | "Cash On Delivery"

  // Credit Card fields
  cardNumber?: string
  cardExpiry?: string
  cardCVC?: string

  // Bank Transfer fields
  bankName?: string
  accountNumber?: string
  routingNumber?: string
}



function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormValues>();

   const cartItems = useAppSelector(state => state.cart.items);
   const dispatch = useAppDispatch();
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const router = useRouter();

  const oId = nanoid(12);

  const selectedPaymentMethod = watch("paymentMethod");

 const onSubmit = async (orderData:CheckoutFormValues) => {
  try {
    const newOrder = {
      _type: 'order',
      orderId: oId,
      customer: {
        name: orderData.firstName + ' ' + orderData.lastName,
        email: orderData.email,
        phone: orderData.phone,
        address: {
          street: orderData.address,
          city: orderData.city,
          state: orderData.province,
          zip: orderData.zipCode,
          country: orderData.country,
        },
      },
      items: cartItems.map((item,idx) => ({
        _key: item.id + idx,
        product: { _type: 'reference', _ref: item.id },
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: calculateSubtotal(),
      paymentMethod: orderData.paymentMethod,
      paymentStatus: "Pending",
      orderStatus: "Processing",
      orderDate: new Date().toISOString(),
    };

    const response = await client.create(newOrder);
    alert("Ordered Successfully")
    console.log('Order stored successfully:', response);
    dispatch(clearCart());
    router.push("/shop");
   
  } catch (error) {
    console.error('Error storing order:', error);
    alert("Error: Failed to order. Please try again later.");
    throw new Error('Failed to store order');
  }
};

  return (
    <div className="full">
      <PageHero name="Checkout" />

      <Container className="px-4 my-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-6xl mx-auto flex justify-between max-lg:flex-col max-lg:justify-center"
        >
          <div className="w-full h-full text-black px-4 py-12 flex flex-col gap-9 max-lg:items-center">
            <h2 className="font-semibold text-4xl mb-3">Billing details</h2>
            <div className="flex flex-col gap-9 max-sm:w-full">
              <div className="sm:flex max-sm:space-y-6 gap-4 flex-row justify-center items-center max-sm:w-full w-[24rem]">
                <div className="w-full">
                  <Input
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    label="First Name"
                    className="w-full mx-0"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message as string}
                    </span>
                  )}
                </div>
                <div className="w-full">
                  <Input
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    label="Last Name"
                    className="w-full mx-0"
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName.message as string}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <Input
                  {...register("address", {
                    required: "Street address is required",
                  })}
                  label="Street address"
                  className="max-sm:w-full"
                />
                {errors.address && (
                  <span className="text-red-500 text-sm">
                    {errors.address.message as string}
                  </span>
                )}
              </div>

              <div>
                <Input
                  {...register("city", { required: "City is required" })}
                  label="City"
                  className="max-sm:w-full"
                />
                {errors.city && (
                  <span className="text-red-500 text-sm">
                    {errors.city.message as string}
                  </span>
                )}
              </div>

              <div>
                <Input
                  {...register("province", {
                    required: "Province is required",
                  })}
                  label="Province"
                  className="max-sm:w-full"
                />
                {errors.province && (
                  <span className="text-red-500 text-sm">
                    {errors.province.message as string}
                  </span>
                )}
              </div>

              <div>
                <Input
                  {...register("zipCode", {
                    required: "Zip code is required",
                    pattern: {
                      value: /^[A-Za-z0-9\s-]{3,10}$/,
                      message: "Invalid zip code format",
                    },
                  })}
                  label="Zip Code"
                  className="max-sm:w-full"
                />
                {errors.zipCode && (
                  <span className="text-red-500 text-sm">
                    {errors.zipCode.message as string}
                  </span>
                )}
              </div>

              <div>
                <Input
                  {...register("country", { required: "Country is required" })}
                  label="Country"
                  className="max-sm:w-full"
                />
                {errors.country && (
                  <span className="text-red-500 text-sm">
                    {errors.country.message as string}
                  </span>
                )}
              </div>

              <div>
                <Input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+\s()-]{7,15}$/,
                      message: "Invalid phone number format",
                    },
                  })}
                  label="Phone"
                  className="max-sm:w-full"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    {errors.phone.message as string}
                  </span>
                )}
              </div>

              <div>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  label="Email address"
                  className="max-sm:w-full"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message as string}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="w-full h-full text-black px-4 py-12 mt-10 flex flex-col gap-9 max-lg:items-center">
            <div className="w-full p-4 border-b space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="font-medium text-2xl">Product</h2>
                <h2 className="font-medium text-2xl">Subtotal</h2>
              </div>
              {cartItems.map((item,idx )=> (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-[#9F9F9F]">
                  {item.name} ( {item.color} | {item.size} ) <b className="text-black"> x {item.quantity}</b>{" "}
                </span>
                <span className="font-light">Rs. {item.price}</span>
              </div>))}
              <div className="flex items-center justify-between">
                <span className=" ">Subtotal</span>
                <span className="font-light">{calculateSubtotal()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className=" ">Total</span>
                <span className="font-bold text-[#B88E2F]">{calculateSubtotal()}</span>
              </div>
            </div>

            <div className="w-full p-6 flex-col gap-6 flex">
              <h3 className="font-semibold text-xl">Payment Method</h3>

              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    value="Credit Card"
                    {...register("paymentMethod", {
                      required: "Please select a payment method",
                    })}
                  />
                  <CreditCard className="text-gray-600" size={20} />
                  <span className="font-medium">Credit Card</span>
                </label>

                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    value="Bank Transfer"
                    {...register("paymentMethod")}
                  />
                  <Building2 className="text-gray-600" size={20} />
                  <span className="font-medium">Direct Bank Transfer</span>
                </label>

                <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    value="Cash On Delivery"
                    {...register("paymentMethod")}
                  />
                  <Truck className="text-gray-600" size={20} />
                  <span className="font-medium">Cash on Delivery</span>
                </label>

                {errors.paymentMethod && (
                  <span className="text-red-500 text-sm">
                    {errors.paymentMethod.message as string}
                  </span>
                )}
              </div>

              {selectedPaymentMethod === "Credit Card" && (
                <div className="w-full">
                  <div className="mt-6">
                    <Input
                      {...register("cardNumber", {
                        required: "Card number is required",
                        pattern: {
                          value: /^[0-9]{16}$/,
                          message: "Please enter a valid 16-digit card number",
                        },
                      })}
                      label="Card Number"
                      placeholder="1234 5678 9012 3456"
                       className="w-full"
                    />
                    {errors.cardNumber && (
                      <span className="text-red-500 text-sm">
                        {errors.cardNumber.message as string}
                      </span>
                    )}
                  </div>

                  <div className="mt-6">
                    <Input
                      {...register("cardExpiry", {
                        required: "Expiry date is required",
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                          message: "Please enter a valid expiry date (MM/YY)",
                        },
                      })}
                      label="Expiry Date"
                      placeholder="MM/YY"
                      className="w-full"
                    />
                    {errors.cardExpiry && (
                      <span className="text-red-500 text-sm">
                        {errors.cardExpiry.message as string}
                      </span>
                    )}
                  </div>
                  <div className="mt-6">
                    <Input
                      {...register("cardCVC", {
                        required: "CVC is required",
                        pattern: {
                          value: /^[0-9]{3,4}$/,
                          message: "Please enter a valid CVC",
                        },
                      })}
                      label="CVC"
                      placeholder="123"
                      className="w-full"
                    />
                    {errors.cardCVC && (
                      <span className="text-red-500 text-sm">
                        {errors.cardCVC.message as string}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {selectedPaymentMethod === "Bank Transfer" && (
                <div className="space-y-4 mt-4 w-full">
                  <div>
                    <Input
                      {...register("bankName", {
                        required: "Bank name is required",
                      })}
                      label="Bank Name"
                      placeholder="Enter your bank name"
                      className="w-full"
                    />
                    {errors.bankName && (
                      <span className="text-red-500 text-sm">
                        {errors.bankName.message as string}
                      </span>
                    )}
                  </div>

                  <div>
                    <Input
                      {...register("accountNumber", {
                        required: "Account number is required",
                        pattern: {
                          value: /^[0-9]{8,}$/,
                          message: "Please enter a valid account number",
                        },
                      })}
                      label="Account Number"
                      placeholder="Enter your account number"
                      className="w-full"
                    />
                    {errors.accountNumber && (
                      <span className="text-red-500 text-sm">
                        {errors.accountNumber.message as string}
                      </span>
                    )}
                  </div>

                  <div>
                    <Input
                      {...register("routingNumber", {
                        required: "Routing number is required",
                        pattern: {
                          value: /^[0-9]{9}$/,
                          message:
                            "Please enter a valid 9-digit routing number",
                        },
                      })}
                      label="Routing Number"
                      placeholder="Enter 9-digit routing number"
                      className="w-full"
                    />
                    {errors.routingNumber && (
                      <span className="text-red-500 text-sm">
                        {errors.routingNumber.message as string}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {selectedPaymentMethod === "Cash On Delivery" && (
                <div className="p-4 bg-gray-50 rounded-lg mt-4">
                  <p className="text-gray-600">
                    Pay with cash upon delivery. Please note that cash on
                    delivery is only available for orders under Rs. 500,000.00
                  </p>
                </div>
              )}

              <p className="font-extralight text-black/80 mt-6">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span className="font-semibold text-black">
                  privacy policy.
                </span>
              </p>

              <Button
                type="submit"
                variant={"fBtn2"}
                size={"f2"}
                className="w-3/5 mx-auto mt-7"
              >
                Place Order
              </Button>
            </div>
          </div>
        </form>
      </Container>

      <DeliveryServices />
    </div>
  );
}

export default Page;
