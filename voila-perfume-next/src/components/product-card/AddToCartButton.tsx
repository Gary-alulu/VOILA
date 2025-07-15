'use client';

import { motion } from 'framer-motion';

export default function AddToCartButton() {
  return (
    <motion.button
      className="bg-deep-plum text-white px-4 py-2 rounded-full"
      aria-label="Add product to cart"
    >
      Add to Cart
    </motion.button>
  );
}