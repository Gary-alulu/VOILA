'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  clientName: string;
  clientRole: string;
  avatarSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  clientName,
  clientRole,
  avatarSrc,
}) => {
  return (
    <motion.div
      className="relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-lg"
      whileHover={{
        y: -2,
        boxShadow: '0 0 15px rgba(212,175,55,0.25)',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-accent-gold flex items-center justify-center">
          <Image src={avatarSrc} alt={clientName} width={80} height={80} className="w-full h-full object-cover" />
          {/* Animated quote icon */}
          <motion.div
            className="absolute bottom-0 right-0 bg-accent-purple rounded-full p-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v4a2 2 0 002 2h1a2 2 0 012 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2h-1a2 2 0 01-2-2V7a2 2 0 00-2-2z"
              />
            </svg>
          </motion.div>
        </div>
      </div>
      <p className="text-lg italic font-playfair-display mt-8 mb-4">
        “{quote}”
      </p>
      <p className="font-inter font-bold text-accent-gold">{clientName}</p>
      <p className="font-inter text-sm opacity-70">{clientRole}</p>
    </motion.div>
  );
};

export default TestimonialCard;
