'use client';

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { useState, useEffect } from 'react';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';
import { navLinks } from '@/data/navLinks';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between fixed top-0 left-0 z-50 dark:bg-dark-bg dark:shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-[#1A1A1A] font-playfair dark:text-[#1A1A1A]">
            VOILÀ
        </Link>
      </div>

      {/* Navigation Links */}
      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-[#1A1A1A] hover:text-[#1A1A1A] font-satoshi dark:text-white dark:hover:text-white">
                {link.name}
              </Link>
            ))}
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#1A1A1A] dark:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-bg shadow-md py-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-[#1A1A1A] dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-lg" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Search and Icons */}
      <div className="flex items-center space-x-4">

        <button
          onClick={toggleTheme}
          className="text-[#1A1A1A] hover:text-[#1A1A1A] dark:text-[#1A1A1A] dark:hover:text-[#1A1A1A]"
        >
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </button>
        <Link href="/cart" className="text-[#1A1A1A] hover:text-[#1A1A1A] dark:text-[#1A1A1A] dark:hover:text-[#1A1A1A]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-shopping-cart"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;