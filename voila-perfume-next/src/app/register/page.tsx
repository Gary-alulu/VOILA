'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        router.push('/login');
      } else {
        const data = await res.json();
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-[25vh] bg-cloudGray dark:bg-velvetObsidian">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-velvet-obsidian p-8 rounded-lg shadow-lg w-full max-w-md border border-soft-border dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center text-dark-charcoal dark:text-soft-pale mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-2 border border-soft-border dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-800 text-dark-charcoal dark:text-soft-pale placeholder-gray-500 focus:outline-none focus:ring-accent-gold focus:border-accent-gold sm:text-sm"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-2 border border-soft-border dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-800 text-dark-charcoal dark:text-soft-pale placeholder-gray-500 focus:outline-none focus:ring-accent-gold focus:border-accent-gold sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full pl-10 pr-3 py-2 border border-soft-border dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-800 text-dark-charcoal dark:text-soft-pale placeholder-gray-500 focus:outline-none focus:ring-accent-gold focus:border-accent-gold sm:text-sm"
                placeholder="********"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-dark-charcoal dark:text-soft-pale bg-accent-gold hover:bg-hoverAccentLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-gold dark:bg-imperialGold dark:hover:bg-hoverAccentDark transition-colors duration-200"
          >
            <FaUserPlus className="mr-2 mt-1" /> Register
          </motion.button>
        </form>
        <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
          Already have an account? <a href="/login" className="font-medium text-accent-gold hover:text-yellow-600 dark:text-imperialGold dark:hover:text-gold-dark">Login here</a>
        </p>
      </motion.div>
    </div>
  );
}