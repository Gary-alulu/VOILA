import React from 'react';
import { FaHome, FaPlusCircle } from 'react-icons/fa';

const AddressesSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center"><FaHome className="mr-2" /> Your Addresses</h3>
      <div className="border rounded-lg p-4">
        <p className="font-medium">Home Address</p>
        <p className="text-gray-600 dark:text-gray-400">123 Main St, Anytown, USA 12345</p>
      </div>
      <div className="border rounded-lg p-4">
        <p className="font-medium">Work Address</p>
        <p className="text-gray-600 dark:text-gray-400">456 Office Rd, Cityville, USA 67890</p>
      </div>
      <button className="flex items-center text-soft-gold hover:text-soft-gold/80">
        <FaPlusCircle className="mr-2" /> Add New Address
      </button>
    </div>
  );
};

export default AddressesSection;