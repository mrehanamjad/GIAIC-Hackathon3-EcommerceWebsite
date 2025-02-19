import React from 'react';
import {  Package, AlertCircle, OctagonX, Star, Pen } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';



export interface ProductI {
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

  const fetchProducts = async (): Promise<ProductI[]> => {
        try {
          const product = await client.fetch(`*[_type == "product"]`);
          return product;
        } catch (error) {
          console.error("Error fetching products:", error);
          return []; 
        }
      };
  
  
const OrderDashboard = async () => {
    const products = await fetchProducts();

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">All Products</h2>
          <p className="mt-1 text-gray-500">Manage your furniture products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <Package className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">All Products</p>
              <h3 className="text-2xl font-bold">{products.length}</h3>
              <p className="text-sm text-gray-500">All products available in the store</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <AlertCircle className="h-12 w-12 text-yellow-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Low Stock Products</p>
              <h3 className="text-2xl font-bold">
                {products.filter(product => product.stockLevel <= 3).length}
              </h3>
              <p className="text-sm text-gray-500">Products running low on stock. Consider restocking soon.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <OctagonX className="h-8 w-8 text-red-500" />
            <div>
              <p className="text-sm font-medium text-red-500">Out of Stock</p>
              <h3 className="text-2xl font-bold text-red-700">
                { products.filter(product => product.stockLevel == 0).length }
              </h3>
              <p className="text-sm text-gray-500">Products that are currently out of stock.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <Star className="h-6 w-6 text-purple-500" />
            <div>
              <p className="text-sm font-medium text-gray-500">Featured Products</p>
              <h3 className="text-2xl font-bold">
                {products.filter(product => product.isFeaturedProduct).length}
              </h3>
              <p className="text-sm text-gray-500">Highlighted products on the store’s homepage.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

        {/* Orders Table */}
        <Card className="bg-white shadow-sm">
          <CardHeader className="border-b bg-gray-50/50">
            <CardTitle>All Products</CardTitle>
            <CardDescription>Manage your furniture products</CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader className='overflow-x-auto'>
                <TableRow className="bg-[#FFF9E5]">
                  <TableHead className="font-semibold">Id</TableHead>
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold">Image</TableHead>
                  <TableHead className="font-semibold">Description</TableHead>
                  <TableHead className="font-semibold">Price</TableHead>
                  <TableHead className="font-semibold">Stock Level</TableHead>
                  <TableHead className="font-semibold">Category</TableHead>
                  <TableHead className="font-semibold">Is Featured</TableHead>
                  <TableHead className="font-semibold">Created At</TableHead>
                  <TableHead className="font-semibold">Edit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id} className="hover:bg-gray-50">
                    <TableCell>
                      {product.id}
                    </TableCell>
                    <TableCell className=''>
                          <Image
                            src={product.imagePath as string}
                            alt={product.name}
                            height={800}
                            width={800}
                            className="h-20 w-20 rounded-lg object-cover border"
                          />
                          
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className='text-sm'>
                      {product.description}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">
                          <span className="text-gray-500">Price:</span> {product.price}
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Discount:</span> {product.discountPercentage}%
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p>{product.stockLevel}</p>
                      <Button variant={"secondary"} size={'icon'}>
                        <Pen  />
                      </Button>
                    </TableCell>
                    <TableCell>
                       {product.category}
                    </TableCell>
                   
                    <TableCell>
                      {product.isFeaturedProduct ? "Yes" : "No"}
                    </TableCell>
                    <TableCell>
                    {product._createdAt.slice(0, product._createdAt.indexOf("T"))}                    </TableCell>
                    <TableCell>
                    <Button ><Pen  />Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderDashboard;