import React from 'react';
import { Package2, Truck, CreditCard, Clock } from 'lucide-react';
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
import UpdateStatus from '@/components/forms/UpdateStatus';

// Define TypeScript Interfaces
interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }
  
  interface Customer {
    name: string;
    email: string;
    phone: string;
    address: Address;
  }
  
  interface Product {
    _id: string;
    name: string;
    description?: string;
    imagePath?: string;
  }
  
  interface OrderItem {
    quantity: number;
    price: number;
    product: Product;
  }
  
  interface Order {
    _id: string;
    userId:string;
    orderId: string;
    orderStatus: string;
    paymentMethod: string;
    paymentStatus: string;
    orderDate: string;
    totalAmount: number;
    customer: Customer;
    items: OrderItem[];
  }

  const fetchOrders = async (): Promise<Order[]> => {
    const query = `*[_type=="order"]{
      _id,
      userId,
      orderId,
      orderStatus,
      paymentMethod,
      paymentStatus,
      orderDate,
      totalAmount,
      customer{
        name,
        email,
        phone,
        address {
          street,
          city,
          state,
          zip,
          country
        }
      },
      items[]{
        quantity,
        price,
        product->{
          _id,
          name,
          description,
          imagePath
        }
      }
    }`;
  
    try {
      const orders: Order[] = await client.fetch(query);
      return orders;
    } catch (error) {
      console.error("Error fetching orders:", error);
      return [];
    }
  };
  
  
const OrderDashboard = async () => {
    const orders = await fetchOrders();

    type OrderStatus = "paid" | "pending" | "failed" | "delivered" | "processing" | "shipped";

    const statusColors: Record<OrderStatus, string> = {
      paid: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      failed: "bg-red-100 text-red-800",
      delivered: "bg-blue-100 text-blue-800",
      processing: "bg-purple-100 text-purple-800",
      shipped: "bg-indigo-100 text-indigo-800"
    };
    
    const getStatusColor = (status: string) => {
      return statusColors[status as OrderStatus] || "bg-gray-100 text-gray-800";
    };
    

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">All Orders</h2>
          <p className="mt-1 text-gray-500">Track and manage your furniture orders</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Orders</CardTitle>
              <Package2 className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{orders.length}</div>
              <p className="text-sm text-gray-500 mt-1">Across all time</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">In Transit</CardTitle>
              <Truck className="h-5 w-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                {orders.filter(order => order.orderStatus === 'Processing').length}
              </div>
              <p className="text-sm text-gray-500 mt-1">Currently processing</p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Spent</CardTitle>
              <CreditCard className="h-5 w-5 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                ${orders.reduce((sum, order) => sum + order.totalAmount, 0).toFixed(2)}
              </div>
              <p className="text-sm text-gray-500 mt-1">Lifetime purchases</p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Last Order</CardTitle>
              <Clock className="h-5 w-5 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold text-gray-900">{orders[0]?.orderDate ? orders[0]?.orderDate : "404"}</div>
              <p className="text-sm text-gray-500 mt-1">Most recent purchase</p>
            </CardContent>
          </Card>
        </div>

        {/* Orders Table */}
        <Card className="bg-white shadow-sm">
          <CardHeader className="border-b bg-gray-50/50">
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Manage your furniture orders</CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader className='overflow-x-auto'>
                <TableRow className="bg-[#FFF9E5]">
                  <TableHead className="font-semibold">User Id</TableHead>
                  <TableHead className="font-semibold">Order Info</TableHead>
                  <TableHead className="font-semibold">Product</TableHead>
                  <TableHead className="font-semibold">Payment</TableHead>
                  <TableHead className="font-semibold">Customer</TableHead>
                  <TableHead className="font-semibold">Shipping Address</TableHead>
                  <TableHead className="font-semibold">Amount</TableHead>
                  <TableHead className="font-semibold">Payment Status</TableHead>
                  <TableHead className="font-semibold">Order Status</TableHead>
                  <TableHead className="font-semibold">Update Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order._id} className="hover:bg-gray-50">
                    <TableCell>
                      <p className='max-w-16 overflow-hidden'>{order.userId}</p>
                    </TableCell>
                    <TableCell className="font-medium">
                      <div className="space-y-1">
                        <div className="font-semibold">{order.orderId}</div>
                        <div className="text-sm text-gray-500">{order.orderDate}</div>
                      </div>
                    </TableCell>
                    <TableCell className='min-w-60 '>
                      {order.items.map((item) => (
                        <div key={item.product._id} className="flex items-center space-x-4 min-w-60 w-full">
                          <Image
                            src={item.product.imagePath as string}
                            alt={item.product.name}
                            height={800}
                            width={800}
                            className="h-20 w-20 rounded-lg object-cover border"
                          />
                          <div>
                            <div className="font-medium">{item.product.name}</div>
                            <div className="text-sm text-gray-500">
                              Qty: {item.quantity} × ${item.price}
                            </div>
                          </div>
                        </div>
                      ))}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">
                          <span className="text-gray-500">Method:</span> {order.paymentMethod}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1 text-sm">
                        <div>{order.customer.name}</div>
                        <div>{order.customer.email}</div>
                        <div>{order.customer.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1 text-sm">
                        <div>{order.customer.address.street}</div>
                        <div>
                          {order.customer.address.city}, {order.customer.address.state} {order.customer.address.zip}
                        </div>
                        <div className="text-gray-500">{order.customer.address.country}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-semibold">${order.totalAmount.toFixed(2)}</div>
                    </TableCell>
                    <TableCell>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.paymentStatus.toLowerCase())}`}>
                          {order.paymentStatus}
                        </div>
                    </TableCell>
                    <TableCell>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium block ${getStatusColor(order.orderStatus.toLocaleLowerCase())}`}>
                          {order.orderStatus}
                        </div>
                    </TableCell>
                    <TableCell>
                    <div >
                            <UpdateStatus orderId={order._id} paymentStat={order.paymentStatus} orderStat={order.orderStatus} />
                        </div>
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