'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OrderSummary = () => {
  // Placeholder data for demonstration
  const items = [
    {
      id: 1,
      name: 'VOILÀ Classic Eau de Parfum',
      price: 120.00,
      quantity: 1,
      image: '/images/product-1.png', // Replace with actual product image paths
    },
    {
      id: 2,
      name: 'VOILÀ Travel Spray Set',
      price: 60.00,
      quantity: 1,
      image: '/images/product-2.png', // Replace with actual product image paths
    },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10.00; // Example shipping cost
  const tax = subtotal * 0.05; // Example 5% tax
  const total = subtotal + shipping + tax;

  return (
    <section className="p-6 bg-white/5 rounded-xl shadow-lg border border-white/10">
      <h3 className="text-xl font-satoshi mb-4 text-white">Order Summary</h3>
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              className="rounded-md object-cover"
            />
            <div className="flex-1">
              <p className="text-white font-medium">{item.name}</p>
              <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
            </div>
            <p className="text-white font-semibold">${item.price.toFixed(2)}</p>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-gray-700 pt-4 space-y-2">
        <div className="flex justify-between text-gray-300">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Tax (5%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-white text-lg font-bold mt-4">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;