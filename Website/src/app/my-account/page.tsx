// import Container from '@/components/Container'
// import DeliveryServices from '@/components/DeliveryServices'
// import PageHero from '@/components/PageHero'
// import { Button } from '@/components/ui/button'
// import { Checkbox } from '@/components/ui/checkbox'
// import { Input } from '@/components/ui/input'
// import React from 'react'

// function myAccount() {
//   return (
//     <div className='w-full'>
//         <PageHero name="My Account" />
//             <Container className='px-4 my-10'>
//                 <div className='w-full max-w-6xl mx-auto flex justify-between max-lg:flex-col max-lg:justify-center'>
//                     <div className='w-full h-full text-black px-4 py-12 flex flex-col gap-9 max-lg:items-center'>
//                         <h2 className='font-semibold text-4xl mb-3'>Login</h2>
//                         <div className="flex flex-col gap-9">
//                         <Input 
//                             label='Username or email address'
//                             type='email'
//                         />
//                         <Input 
//                             label='Password'
//                             type='password'
//                         />
//                         <label htmlFor='r-me' className='flex items-center gap-4'> <Checkbox id={"r-me"} /> Remember me</label>
//                         </div>
//                         <div className='flex items-center max-lg:flex-col gap-4'>
//                             <Button variant={'fBtn2'} size={'f2'} className='w-44 '>Login</Button>
//                             <span className='font-extralight text-sm text-black/70'>Lost Your Password?</span>
//                         </div>
//                     </div>
//                     <div className='w-full h-full text-black px-4 py-12   flex flex-col gap-9 max-lg:items-center '>
//                         <h2 className='font-semibold text-4xl mb-3'>SignUp</h2>
                        
//                         <Input label='Email address' />
//                         <div className='font-light max-sm:text-center text-black/80 max-w-[26rem] text-justify space-y-4'>
//                         <p >A link to set a new password will be sent to your email address.</p>
//                         <p >Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-medium'>privacy policy.</span></p>
//                         </div>
//                         <Button variant={'fBtn2'} size={'f2'} className='w-48'>Regester</Button>
//                     </div>
//                 </div>
//             </Container>
//         <DeliveryServices />
//     </div>
//   )
// }

// export default myAccount




import React from 'react';
import { Package2, Truck, Clock, CreditCard } from 'lucide-react';
import Image from 'next/image';

const UserDashboard = () => {
  // Sample data - replace with your actual data
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-02-14",
      address: {
        street: "123 Main St",
        city: "Austin",
        state: "TX",
        zipcode: "78701",
        country: "USA"
      },
      products: [
        {
          name: "Modern Sofa",
          image: "/api/placeholder/150/150",
          color: "Gray",
          size: "3-Seater",
          quantity: 1,
          price: 999.99
        }
      ],
      totalAmount: 999.99,
      paymentStatus: "Paid",
      orderStatus: "Delivered"
    },
    {
      id: "ORD-2024-002",
      date: "2024-02-13",
      address: {
        street: "456 Oak Ave",
        city: "Seattle",
        state: "WA",
        zipcode: "98101",
        country: "USA"
      },
      products: [
        {
          name: "Dining Table",
          image: "/api/placeholder/150/150",
          color: "Walnut",
          size: "6-Seater",
          quantity: 1,
          price: 799.99
        }
      ],
      totalAmount: 799.99,
      paymentStatus: "Pending",
      orderStatus: "Processing"
    }
  ];

  const getStatusColor = (status:string) => {
    const statusColors = {
      Paid: "text-green-600",
      Pending: "text-yellow-600",
      Failed: "text-red-600",
      Delivered: "text-green-600",
      Processing: "text-blue-600",
      Shipped: "text-purple-600"
    };
    return (statusColors as any)[status] || "text-gray-600";
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Orders</h1>
        <div className="text-sm text-gray-500">
          Welcome back, User!
        </div>
      </div>

      {/* Order Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Stats Cards */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Package2 className="h-8 w-8 text-blue-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="text-2xl font-bold">{orders.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Truck className="h-8 w-8 text-green-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Delivered</p>
              <p className="text-2xl font-bold">
                {orders.filter(order => order.orderStatus === "Delivered").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-yellow-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Processing</p>
              <p className="text-2xl font-bold">
                {orders.filter(order => order.orderStatus === "Processing").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <CreditCard className="h-8 w-8 text-purple-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Total Spent</p>
              <p className="text-2xl font-bold">
                ${orders.reduce((sum, order) => sum + order.totalAmount, 0).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Recent Orders</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-4">
                      <Image
                      height={64}
                      width={64}
                        src={order.products[0].image}
                        alt={order.products[0].name}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{order.products[0].name}</p>
                        <p className="text-sm text-gray-500">
                          {order.products[0].color} • {order.products[0].size}
                        </p>
                        <p className="text-sm text-gray-500">
                          Qty: {order.products[0].quantity}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <p className={getStatusColor(order.paymentStatus)}>
                        Payment: {order.paymentStatus}
                      </p>
                      <p className={getStatusColor(order.orderStatus)}>
                        Order: {order.orderStatus}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm text-gray-900">
                      {order.address.street}<br />
                      {order.address.city}, {order.address.state} {order.address.zipcode}<br />
                      {order.address.country}
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${order.totalAmount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.orderStatus === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.orderStatus === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.orderStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;