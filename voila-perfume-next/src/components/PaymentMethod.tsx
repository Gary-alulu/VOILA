'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCcStripe, FaCreditCard } from 'react-icons/fa'
import { SiApplepay, SiGooglepay } from 'react-icons/si'

const PaymentMethod = () => {
  const [paymentOption, setPaymentOption] = useState<'stripe' | 'applepay' | 'googlepay' | 'card' | null>(null);

  return (
    <section className="mb-8 p-6 bg-white/5 rounded-xl shadow-lg border border-white/10">
      <h3 className="text-xl font-satoshi mb-4 text-white">Payment Method</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Stripe */}
        <motion.div
          className={`p-4 rounded-lg border cursor-pointer flex items-center justify-center ${paymentOption === 'stripe' ? 'border-accent-gold' : 'border-gray-600'} hover:border-accent-gold transition-all duration-300`}
          onClick={() => setPaymentOption('stripe')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaCcStripe className="text-6xl text-purple-600" />
        </motion.div>

        {/* Apple Pay */}
        <motion.div
          className={`p-4 rounded-lg border cursor-pointer flex items-center justify-center ${paymentOption === 'applepay' ? 'border-accent-gold' : 'border-gray-600'} hover:border-accent-gold transition-all duration-300`}
          onClick={() => setPaymentOption('applepay')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <SiApplepay className="text-6xl text-gray-400" />
        </motion.div>

        {/* Google Pay */}
        <motion.div
          className={`p-4 rounded-lg border cursor-pointer flex items-center justify-center ${paymentOption === 'googlepay' ? 'border-accent-gold' : 'border-gray-600'} hover:border-accent-gold transition-all duration-300`}
          onClick={() => setPaymentOption('googlepay')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <SiGooglepay className="text-6xl text-red-600" />
        </motion.div>

        {/* Credit Card */}
        <motion.div
          className={`p-4 rounded-lg border cursor-pointer flex items-center justify-center ${paymentOption === 'card' ? 'border-accent-gold' : 'border-gray-600'} hover:border-accent-gold transition-all duration-300`}
          onClick={() => setPaymentOption('card')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaCreditCard className="text-6xl text-blue-400" />
        </motion.div>
      </div>

      {paymentOption === 'card' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-4 mt-4"
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="card_number"
              id="card_number"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="card_number"
              className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Card Number
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="expiry_date"
                id="expiry_date"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="expiry_date"
                className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Expiry Date (MM/YY)
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="cvv"
                id="cvv"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="cvv"
                className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                CVV
              </label>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default PaymentMethod;