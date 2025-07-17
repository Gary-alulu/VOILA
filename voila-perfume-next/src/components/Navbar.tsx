'use client';

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Icon from './icons/Icon';
import { navLinks } from '@/data/navLinks';

import DrawerMenu from './DrawerMenu';
import { useSelector } from 'react-redux';
import { selectCartTotalQuantity } from '@/features/cart/cartSlice';
import { FaShoppingCart, FaBars, FaSun, FaMoon, FaUser } from 'react-icons/fa';

/**
 * Navbar component provides the main navigation for the application.
 * It includes a logo, navigation links, theme toggle, user icon, and a shopping cart icon.
 * The component adapts its appearance based on the active theme (light/dark mode) and screen size.
 *
 * - Background: `cloudGray` (light mode) and `velvetObsidian` (dark mode).
 * - Logo Text: `charcoalBlack` (light mode) and `whiteSnow` (dark mode).
 * - Navigation Links & Icons: `charcoalBlack` with `hover:text-urbanGray` (light mode) and
 *   `whiteSnow` with `dark:hover:text-softPale` (dark mode).
 *
 * @returns {JSX.Element} The Navbar component.
 */
const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) return null;
  return (
    <nav className={`w-full h-[72px] bg-ivoryBeige/95 backdrop-blur-sm py-4 px-6 flex items-center justify-between fixed top-0 left-0 z-50 dark:bg-deepCharcoal/95 transition-all duration-300 ${hasShadow ? 'shadow-md dark:shadow-lg' : ''}`}>
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-darkText font-playfair dark:text-lightText tracking-headlines">
            VOILÀ
        </Link>
      </div>

      {/* Navigation Links */}
      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-darkText hover:text-lightAccent font-inter font-medium tracking-all-caps dark:text-lightText dark:hover:text-darkAccent transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-base
                  ${pathname === link.href ? 'text-lightAccent dark:text-darkAccent' : ''}
                `}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-lightAccent dark:bg-darkAccent rounded-full transform -translate-x-1/2 -translate-y-full"></span>
                )}
              </Link>
            ))}
      </div>





      {/* Drawer Menu for Mobile */}
      <DrawerMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
        <div className="flex flex-col items-center space-y-4 py-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-darkText dark:text-lightText hover:text-lightAccent dark:hover:text-darkAccent font-inter font-medium tracking-all-caps text-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 text-base" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>
      </DrawerMenu>


      {/* Search and Icons */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-darkText dark:text-lightText text-2xl">
            <Icon icon={FaBars} />
          </button>
        </div>

        <button
          onClick={toggleTheme}
          className="text-darkText hover:text-lightAccent dark:text-lightText dark:hover:text-darkAccent transition-all duration-300 ease-in-out hover:scale-110"
        >
          {theme === 'dark' ? <Icon icon={FaSun} /> : <Icon icon={FaMoon} />}
        </button>
        <Link href="/profile" className="text-darkText hover:text-lightAccent dark:text-lightText dark:hover:text-darkAccent transition-all duration-300 ease-in-out hover:scale-110">
          <Icon icon={FaUser} />
        </Link>
        <Link href="/cart" className="relative text-darkText hover:text-lightAccent dark:text-lightText dark:hover:text-darkAccent transition-all duration-300 ease-in-out hover:scale-110">
          <Icon icon={FaShoppingCart} className="h-6 w-6" />
          {cartTotalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartTotalQuantity}
            </span>
          )}
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
