'use client';

import React from 'react';

import { MotionDiv } from '@/components/MotionDiv';
export const revalidate = 60;
import { MotionSection } from '@/components/MotionSection';
import { MotionButton } from '@/components/MotionButton';

const BlogStoriesPage = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <MotionSection
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg md:p-12 lg:p-16"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          Our Blog & Stories
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Discover the latest news, insights, and stories from the world of perfumes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Blog Post Card */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">The Art of Perfume Making</h2>
            <p className="text-gray-600 mb-4">Explore the intricate process of crafting unique fragrances, from sourcing rare ingredients to the final blend.</p>
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Read More
            </MotionButton>
          </MotionDiv>

          {/* Another Example Blog Post Card */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Choosing Your Signature Scent</h2>
            <p className="text-gray-600 mb-4">Tips and tricks to help you find the perfect fragrance that truly represents your personality.</p>
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Read More
            </MotionButton>
          </MotionDiv>

          {/* Add more blog post cards as needed */}
        </div>
      </MotionSection>
    </MotionDiv>
  );
};

export default BlogStoriesPage;