'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
const DeliveryDetails = () => {
  const [deliveryOption, setDeliveryOption] = useState<'pickup' | 'home' | null>(null);

  return (
    <section className="mb-8 p-6 bg-white/5 rounded-xl shadow-lg border border-white/10">
      <h3 className="text-xl font-satoshi mb-4 text-white">Delivery Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <motion.div
          className={`p-4 rounded-lg border cursor-pointer ${deliveryOption === 'pickup' ? 'border-accent-gold' : 'border-gray-600'} hover:border-accent-gold transition-all duration-300`}
          onClick={() => setDeliveryOption('pickup')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <input
            type="radio"
            id="storePickup"
            name="deliveryOption"
            value="pickup"
            checked={deliveryOption === 'pickup'}
            onChange={() => setDeliveryOption('pickup')}
            className="hidden"
          />
          <label htmlFor="storePickup" className="flex items-center cursor-pointer">
            <span className="w-4 h-4 inline-block mr-2 rounded-full border border-gray-400 flex-shrink-0">
              {deliveryOption === 'pickup' && (
                <span className="w-2 h-2 inline-block m-1 rounded-full bg-accent-gold"></span>
              )}
            </span>
            <span className="text-white">Store Pickup</span>
          </label>
        </motion.div>

        <motion.div
          className={`p-4 rounded-lg border cursor-pointer ${deliveryOption === 'home' ? 'border-accent-gold' : 'border-gray-600'} hover:border-accent-gold transition-all duration-300`}
          onClick={() => setDeliveryOption('home')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <input
            type="radio"
            id="homeDelivery"
            name="deliveryOption"
            value="home"
            checked={deliveryOption === 'home'}
            onChange={() => setDeliveryOption('home')}
            className="hidden"
          />
          <label htmlFor="homeDelivery" className="flex items-center cursor-pointer">
            <span className="w-4 h-4 inline-block mr-2 rounded-full border border-gray-400 flex-shrink-0">
              {deliveryOption === 'home' && (
                <span className="w-2 h-2 inline-block m-1 rounded-full bg-accent-gold"></span>
              )}
            </span>
            <span className="text-white">Home Delivery</span>
          </label>
        </motion.div>
      </div>

      {deliveryOption === 'home' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="city"
              id="city"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="street_address"
              id="street_address"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="street_address"
              className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Street Address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="zip_code"
              id="zip_code"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="zip_code"
              className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Zip/Postal Code
            </label>
          </div>
          {/* Date and Time Pickers would go here */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="delivery_date"
              id="delivery_date"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="delivery_date"
              className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Delivery Date
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="time"
              name="delivery_time"
              id="delivery_time"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="delivery_time"
              className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Delivery Time
            </label>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default DeliveryDetails;