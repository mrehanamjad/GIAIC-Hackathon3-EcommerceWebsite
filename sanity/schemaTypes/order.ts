export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'userId',
        title: 'User ID',
        type: 'string',
        description: 'Unique user identifier',
      },
      {
        name: 'orderId',
        title: 'Order ID',
        type: 'string',
        description: 'Unique order identifier',
      },
      {
        name: 'customer',
        title: 'Customer',
        type: 'object',
        fields: [
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'email', title: 'Email', type: 'string' },
          { name: 'phone', title: 'Phone', type: 'string' },
          {
            name: 'address',
            title: 'Address',
            type: 'object',
            fields: [
              { name: 'street', title: 'Street', type: 'string' },
              { name: 'city', title: 'City', type: 'string' },
              { name: 'state', title: 'State', type: 'string' },
              { name: 'zip', title: 'ZIP Code', type: 'string' },
              { name: 'country', title: 'Country', type: 'string' },
            ],
          },
        ],
      },
      {
        name: 'items',
        title: 'Items Ordered',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                title: 'Product',
                type: 'reference',
                to: [{ type: 'product' }],
              },
              { name: 'quantity', title: 'Quantity', type: 'number' },
              { name: 'price', title: 'Price', type: 'number' },
            ],
          },
        ],
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
      },
      {
        name: 'paymentMethod',
        title: 'Payment Method',
        type: 'string',
        options: {
            list: ['Credit Card',  'Bank Transfer',"Cash On Delivery"],
        }
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: ['Pending', 'Paid', 'Failed', 'Refunded'],
        },
      },
      {
        name: 'orderStatus',
        title: 'Order Status',
        type: 'string',
        options: {
          list: ['Processing', 'Shipped', 'Delivered', 'Cancelled'],
        },
      },
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
      },
    ],
  };
  