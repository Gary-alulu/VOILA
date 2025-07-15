'use client';

import { motion } from 'framer-motion';

export default function FavoriteToggle() {
  return (
    <motion.button
      whileTap={{ scale: 1.2 }}
      className="cursor-pointer"
      aria-label="Add to favorites"
    >
      ❤️
    </motion.button>
  );
}