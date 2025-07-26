'use client';

import React from 'react';
import Head from 'next/head';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>About Us - Voila Perfume</title>
        <meta name="description" content="Learn more about Voila Perfume, our mission, values, and commitment to quality fragrances." />
      </Head>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-10">
          About Voila Perfume
        </h1>

        <div className="prose prose-lg dark:prose-invert text-gray-700 dark:text-gray-300 space-y-6">
          <p>
            Welcome to <strong>Voila Perfume</strong>, where we believe that fragrance is an art form, a personal statement, and a journey of discovery. Founded with a passion for exquisite scents and a commitment to quality, we strive to bring you a curated collection of perfumes that evoke emotion, inspire confidence, and leave a lasting impression.
          </p>
          <p>
            Our journey began with a simple idea: to create a space where perfume enthusiasts and newcomers alike could explore a diverse range of fragrances, from timeless classics to contemporary masterpieces. We meticulously source our ingredients from around the globe, partnering with master perfumers who share our dedication to craftsmanship and innovation.
          </p>
          <p>
            At Voila Perfume, we are more than just a retailer; we are storytellers. Each bottle in our collection tells a unique tale, inviting you to immerse yourself in a world of olfactory delights. Whether you're searching for a signature scent, a special gift, or simply wish to indulge your senses, we are here to guide you through the captivating realm of perfumery.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to empower individuals to express their unique identity through the power of scent. We aim to provide an unparalleled selection of high-quality perfumes, coupled with exceptional customer service, ensuring a delightful and memorable shopping experience for every client.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Quality:</strong> We are committed to offering only the finest fragrances, crafted with premium ingredients and meticulous attention to detail.</li>
            <li><strong>Passion:</strong> Our love for perfumes drives us to continuously explore new scents and share our knowledge with our community.</li>
            <li><strong>Integrity:</strong> We operate with transparency and honesty, building trust with our customers and partners.</li>
            <li><strong>Customer Satisfaction:</strong> Your happiness is our priority. We go above and beyond to ensure you find the perfect fragrance and enjoy a seamless shopping experience.</li>
            <li><strong>Innovation:</strong> We embrace creativity and constantly seek new ways to enhance our collection and services.</li>
          </ul>
          <p>
            Thank you for choosing Voila Perfume. We invite you to explore our collection and discover the scent that speaks to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;