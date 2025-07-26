'use client';

import React from 'react';
import { Search, Bell, UserCircle, Sun, PlusCircle, CalendarDays } from 'lucide-react';

const HeaderBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white p-4 border-b border-gray-200 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex-grow flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by order ID, customer or SKU..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Utilities */}
      <div className="flex items-center space-x-4 ml-4">
        <button className="p-2 rounded-full hover:bg-gray-100"><Bell size={20} /></button>
        <button className="p-2 rounded-full hover:bg-gray-100"><UserCircle size={20} /></button>
        <button className="p-2 rounded-full hover:bg-gray-100"><Sun size={20} /></button>
        <button className="p-2 rounded-full hover:bg-gray-100"><PlusCircle size={20} /></button>
        <button className="p-2 rounded-full hover:bg-gray-100 flex items-center">
          <CalendarDays size={20} className="mr-1" />
          <span className="text-sm">Date Filter</span>
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;