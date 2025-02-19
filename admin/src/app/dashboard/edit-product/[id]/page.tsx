import React from 'react'
import { ProductI } from '../../all-products/page';
import { client } from '@/sanity/lib/client';

function page() {
    
      const fetchProducts = async (id:string): Promise<ProductI[]> => {
            try {
              const product = await client.fetch(`*[_type == "product" & id == $id]`);
              return product;
            } catch (error) {
              console.error("Error fetching products:", error);
              return []; 
            }
          };
      
  return (
    <div>page</div>
  )
}

export default page