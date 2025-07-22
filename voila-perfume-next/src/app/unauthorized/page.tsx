import React from 'react';
import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cloudGray dark:bg-velvetObsidian text-dark-charcoal dark:text-soft-pale">
      <h1 className="text-4xl font-bold mb-4">Unauthorized Access</h1>
      <p className="text-lg mb-8 text-center">You do not have permission to view this page.</p>
      <Link href="/" className="px-6 py-3 bg-accent-gold text-white rounded-md hover:bg-hoverAccentLight transition-colors duration-300">
        Go to Homepage
      </Link>
    </div>
  );
}