'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductImageProps {
  image: string;
  alt: string;
}

export default function ProductImage({ image, alt }: ProductImageProps) {
  return (
    <motion.div
      className="relative w-full h-48 rounded-xl overflow-hidden mb-4"
      whileHover={{
        scale: 1.05,
        rotate: -1,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      <Image
        src={image}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, rgba(255, 228, 225, 0.3) 0%, rgba(255, 228, 225, 0) 70%)' }}
      ></div>
    </motion.div>
  );
}