'use client';

import React from 'react';

const ContactInfo = () => {
  return (
    <section className="mb-8 p-6 bg-white/5 rounded-xl shadow-lg border border-white/10">
      <h3 className="text-xl font-satoshi mb-4 text-white">Contact Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last Name
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="tel"
          name="phone"
          id="phone"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-gold focus:outline-none focus:ring-0 focus:border-accent-gold peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="phone"
          className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-gold peer-focus:dark:text-accent-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone Number (e.g., +1 123-456-7890)
        </label>
      </div>
    </section>
  );
};

export default ContactInfo;