import { NextResponse } from 'next/server';
import axios from 'axios';
import {client} from '@/sanity/lib/client';

export async function GET() {
  try {
    // const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');
    
    // for (const product of data) {
    //   await client.create({
    //     _type: 'product',
    //     id: product.id,
    //     name: product.name,
    //     imagePath: product.imagePath,
    //     price: parseFloat(product.price),
    //     description: product.description,
    //     discountPercentage: product.discountPercentage,
    //     isFeaturedProduct: product.isFeaturedProduct,
    //     stockLevel: product.stockLevel,
    //     category: product.category,
    //   });
    // }
    
    return NextResponse.json({ message: 'Data inserted successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch or insert data' }, { status: 500 });
  }
}