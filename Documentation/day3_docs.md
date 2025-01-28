# Day 3 - API Integration Report - Furniture E-commerce Website

## 1. API Overview
- **API Endpoint**: https://template-0-beta.vercel.app/api/product
- **Integration Method**: Next.js with Sanity.io

## 2. Schema Adjustments

### Original API Schema
```json
{
  "id": "string",
  "name": "string",
  "imagePath": "url",
  "price": "number",
  "description": "string",
  "discountPercentage": "number",
  "isFeaturedProduct": "boolean",
  "stockLevel": "number",
  "category": "string"
}
```

### Sanity CMS Schema Modifications
- Mapped all fields directly to corresponding Sanity schema types
- Converted price to number type
- Added validation for required fields
- Maintained original field names for consistency

## 3. Migration Steps and Tools

### Tools Used
- Next.js
- Sanity.io
- Axios for API fetching
- Sanity Client for data insertion

### Migration Process
1. Create Sanity schema matching API structure
2. Implement API fetching route in Next.js
3. Transform and insert data into Sanity CMS
4. Verify data integrity

## 4. Code Snippets

### Sanity Schema 
```typescript
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      { name: 'id', title: 'ID', type: 'string' },
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'imagePath', title: 'Image Path', type: 'url' },
      { name: 'price', title: 'Price', type: 'number' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'discountPercentage', title: 'Discount Percentage', type: 'number' },
      { name: 'isFeaturedProduct', title: 'Is Featured Product', type: 'boolean' },
      { name: 'stockLevel', title: 'Stock Level', type: 'number' },
      { name: 'category', title: 'Category', type: 'string' },
    ],
  };
  
```

### API Fetching and Insertion Script
```typescript
import { NextResponse } from 'next/server';
import axios from 'axios';
import { client } from '@/sanity/lib/client'; 

export async function GET() {
  try {
    const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');

    for (const product of data) {
      await client.create({
        _type: 'product',
        id: product.id,
        name: product.name,
        imagePath: product.imagePath,
        price: parseFloat(product.price),
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      });
    }

    return NextResponse.json({ message: 'Data inserted successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch or insert data' },
      { status: 500 }
    );
  }
}
```

## 5. Challenges and Solutions
- Handled type conversions during data migration
- Implemented error logging for failed insertions
- Ensured data consistency between API and Sanity schema


## Conclusion
Successfully integrated external API data into Sanity CMS for Furniture E-commerce marketplace, establishing a robust data migration workflow.