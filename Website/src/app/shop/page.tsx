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

async function ShopPage() {
  const products: ProductI[] = await getProducts();
  return (
    <div className="w-full">
      <PageHero name="Shop" />
      <AllProducts products={products} />
      <DeliveryServices />
    </div>
  );
}

export default ShopPage;
