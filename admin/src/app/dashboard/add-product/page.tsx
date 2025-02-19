"use client"
import ProductForm, { ProductFormValues } from '@/components/forms/productForm'
import { client } from '@/sanity/lib/client';
import React from 'react'

function page() {
    
 const onSubmit = async (product:ProductFormValues) => {
    try {
      const newProduct = {
        _type: 'product',
        ...product,
      };
  
      const response = await client.create(newProduct);
      alert("Product added successfully")
      console.log('Product added successfully:', response);
     
    } catch (error) {
      console.error('Error in Product adding:', error);
      alert("Error: Failed to add product. Please try again later.");
      throw new Error('Failed to add product');
    }
  };


  return (
    <div className='md:px-6 px-4'>
        <ProductForm />
    </div>
  )
}

export default page