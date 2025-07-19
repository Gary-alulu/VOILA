import React from 'react';
import { FaCreditCard, FaPlusCircle } from 'react-icons/fa';

const PaymentMethodsSection = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center"><FaCreditCard className="mr-2" /> Your Payment Methods</h3>
      <div className="border rounded-lg p-4">
        <p className="font-medium">Visa ending in **** 1234</p>
        <p className="text-gray-600 dark:text-gray-400">Expires 12/25</p>
      </div>
      <button className="flex items-center text-soft-gold hover:text-soft-gold/80">
        <FaPlusCircle className="mr-2" /> Add New Payment Method
      </button>
    </div>
  );
};

export default PaymentMethodsSection;