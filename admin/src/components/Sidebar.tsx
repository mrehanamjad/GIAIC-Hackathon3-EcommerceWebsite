"use client"
import React, { useState } from 'react';
import { Package, ShoppingCart, Plus, ChevronLeft, ChevronRight, LayoutDashboard } from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/dashboard'
    },
    {
      title: 'Orders',
      icon: <ShoppingCart size={20} />,
      path: '/dashboard/orders'
    },
    {
      title: 'All Products',
      icon: <Package size={20} />,
      path: '/dashboard/all-products'
    },
    {
      title: 'Add Product',
      icon: <Plus size={20} />,
      path: '/dashboard/add-product'
    }
  ];

  return (
    <div 
      className={`${
        isExpanded ? 'w-fit' : 'w-16'
      } h-full bg-gray-900 text-white transition-all duration-300 relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-10 bg-gray-800 rounded-full p-1.5 hover:bg-gray-700 focus:outline-none"
      >
        {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      {/* Logo Section */}
      <div className="p-4 border-b border-gray-700">
        {isExpanded ? (
          <div className="text-xl font-bold">Admin Panel</div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
            <span className="text-sm font-bold">A</span>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6">
        <ul className="space-y-2 px-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className={`
                  flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors
                  ${isExpanded ? 'justify-start space-x-3' : 'justify-center'}
                  hover:text-white group
                `}
              >
                <div className={`${!isExpanded && 'tooltip-wrapper'}`}>
                  {item.icon}
                  {/* Tooltip for collapsed state */}
                  {!isExpanded && (
                    <div className="
                      absolute left-16 hidden group-hover:block bg-gray-800 text-white 
                      px-2 py-1 rounded-md text-sm whitespace-nowrap z-50
                    ">
                      {item.title}
                    </div>
                  )}
                </div>
                {isExpanded && <span>{item.title}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
};

export default Sidebar;