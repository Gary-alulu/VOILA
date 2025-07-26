'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

interface AnimatedNavLinkProps {
  href: string;
  label: string;
  children?: React.ReactNode;
}

const AnimatedNavLink: React.FC<AnimatedNavLinkProps> = ({ href, label, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.div
      className={`relative mb-2 rounded-lg transition-all duration-300 ${isActive ? 'bg-purple-100 text-purple-800 font-bold' : 'text-gray-600 hover:bg-gray-100'}`}
      whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href} className="flex items-center p-3">
        {children && <span className="mr-3">{children}</span>}
        {label}
      </Link>
      {isActive && (
        <motion.div
          className="absolute left-0 top-0 h-full w-1 bg-purple-600 rounded-l-lg"
          layoutId="sidebar-active-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

export default AnimatedNavLink;