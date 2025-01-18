import React from "react";
import DeliveryServices from "@/components/DeliveryServices";
import PageHero from "@/components/PageHero";
import AllProducts from "@/components/shop/AllProducts";
import ProductFilterBar from "@/components/shop/ProductFilterBar";
import { client } from "@/sanity/lib/client";

interface ProductI {
  id: string;
  name: string;
  imagePath: string;
  price: number;
}

async function getProducts() {
  try {
    const products = await client.fetch(
      `*[_type == "product"]{id,name,imagePath,price}`
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
      <ProductFilterBar />
      <AllProducts products={products} />
      <DeliveryServices />
    </div>
  );
}

export default ShopPage;
