// "use client";
import React from 'react';
import data from '@/data/data.json'
import ProductDetail from '@/components/ProductDetail';
import ProductSection from '@/components/home/ProductSection';
import ProductCard from '@/components/ProductCard';
import { client } from '@/sanity/lib/client';


interface ProductI {
  // Basic product information
  id: string ;
  name: string;
  description: string;
  price: number;
  category: string;
  imagePath: string;
  discountPercentage: number;
  stockLevel: number;
  isFeaturedProduct: boolean;

  // Sanity CMS specific fields
  _id: string;
  _type: 'product';
  _createdAt: string;  // ISO date string
  _updatedAt: string;  // ISO date string
  _rev: string;
}



async function getProductById(productId: string) {
  try {
    const product = await client.fetch(
      `*[_type == "product" && id == $productId][0]`, // Fetch the first matching product
      { productId } // Pass the parameter
    );
    return product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null; // Return null if there's an error
  }
}

async function getProductByCategory(productId:string ,category: string) {
  try {
    const products = await client.fetch(
      `*[_type == "product"  && id != $productId && category == $category][0..3]`, // Fetch the first matching product
      { productId,category } // Pass the parameter
    );
    return products;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return []; 
  }
}


async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const product:ProductI = await getProductById(id);
  const relatedProduct:ProductI[] = await getProductByCategory(product.id,product.category);
  return (
    <div className="w-full">
        {product && <ProductDetail {...product} />}
        <ProductSection title="Related Products" btnText="View More" >
        <div className="flex justify-between  overflow-x-scroll w-full py-4 sm:overflow-x-auto">
              {relatedProduct.map((product, index) => (
                <div key={index} className="">
                 <ProductCard {...product} />
                </div>
              ))}
            </div>
        </ProductSection>
    </div>
  );
}

export default Page;