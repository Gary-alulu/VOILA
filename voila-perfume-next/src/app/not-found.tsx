import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-ivory-white dark:bg-dark-charcoal text-dark-charcoal dark:text-soft-pale p-8"
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">This page could not be found.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-charcoalBlack text-white rounded-md hover:bg-gray-800 dark:bg-soft-pale dark:text-dark-charcoal dark:hover:bg-gray-300 transition-colors duration-200"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;