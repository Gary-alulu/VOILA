import React from 'react';
import { FaShoppingCart, FaBoxOpen, FaTruck } from 'react-icons/fa';

const OrdersSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center"><FaShoppingCart className="mr-2" /> Your Orders</h3>
      <div className="border rounded-lg p-4">
        <p className="font-medium flex items-center"><FaBoxOpen className="mr-2" /> Order #12345 - Delivered</p>
        <p className="text-gray-600 dark:text-gray-400 ml-6">Perfume X, Perfume Y</p>
      </div>
      <div className="border rounded-lg p-4">
        <p className="font-medium flex items-center"><FaTruck className="mr-2" /> Order #12346 - Shipped</p>
        <p className="text-gray-600 dark:text-gray-400 ml-6">Perfume Z</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400">View all orders...</p>
    </div>
  );
};

export default OrdersSection;