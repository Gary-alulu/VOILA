'use client';

import { motion } from 'framer-motion';
import ProductImage from './product-card/ProductImage';
import ProductInfo from './product-card/ProductInfo';
import ProductPrice from './product-card/ProductPrice';
import FavoriteToggle from './product-card/FavoriteToggle';
import AddToCartButton from './product-card/AddToCartButton';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  alt: string;
  price: number;
  originalPrice?: number;
  rating: number;
  productId: string;
}

export default function ProductCard({
  name,
  description,
  image,
  alt,
  price,
  originalPrice,
  rating,
  productId,
}: ProductCardProps) {
  return (
    <motion.div
      className="relative w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 p-4 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 bg-white border border-opacity-30 border-white-200 overflow-hidden cursor-pointer"
      data-product-id={productId}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 30px var(--glow-gold), 0 0 60px var(--soft-lavender)',
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <ProductImage image={image} alt={alt} />
      <ProductInfo name={name} description={description} rating={rating} />
      <ProductPrice price={price} originalPrice={originalPrice} />

      <div className="flex justify-between items-center mt-4">
        {/* Placeholder for Size Selector (Optional on hover/card expansion) */}
        {/* <div className="flex space-x-2">...</div> */}
        <FavoriteToggle />
        <AddToCartButton />
      </div>
    </motion.div>
  );
}
