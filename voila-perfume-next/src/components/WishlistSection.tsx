import React from 'react';
import { FaHeart, FaTag } from 'react-icons/fa';

const WishlistSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center"><FaHeart className="mr-2" /> Your Wishlist</h3>
      <div className="border rounded-lg p-4">
        <p className="font-medium flex items-center"><FaTag className="mr-2" /> Elegant Rose Perfume</p>
        <p className="text-gray-600 dark:text-gray-400 ml-6">A classic floral scent.</p>
      </div>
      <div className="border rounded-lg p-4">
        <p className="font-medium flex items-center"><FaTag className="mr-2" /> Ocean Breeze Cologne</p>
        <p className="text-gray-600 dark:text-gray-400 ml-6">Fresh and invigorating.</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400">Browse more products...</p>
    </div>
  );
};

export default WishlistSection;