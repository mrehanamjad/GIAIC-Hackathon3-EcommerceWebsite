import React from "react";
import DeliveryServices from "@/components/DeliveryServices";
import PageHero from "@/components/PageHero";
import AllProducts from "@/components/shop/AllProducts";
import { client } from "@/sanity/lib/client";

interface ProductI {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  category:string;
}

async function getProducts() {
  try {
    const products = await client.fetch(
      `*[_type == "product"]{id,name,imagePath,price,category}`
    );
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ShopPage() {
  try {
    const products: ProductI[] = await getProducts();
    if (!products || products.length === 0) {
      return <div>No products available</div>;
    }
    return (
      <div className="w-full">
        <PageHero name="Shop" />
        <AllProducts products={products} />
        <DeliveryServices />
      </div>
    );
  } catch (error) {
    console.error("Error loading shop page:", error);
    return <div>Error loading products. Please try again later.</div>;
  }
};
