'use client';

import Image from 'next/image';
import ProductImage from './product-card/ProductImage';
import ProductInfo from './product-card/ProductInfo';
import ProductPrice from './product-card/ProductPrice';
import FavoriteToggle from './product-card/FavoriteToggle';
import AddToCartButton from './product-card/AddToCartButton';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  alt: string;
  price: number;
  originalPrice?: number;
  rating: number;
  productId: string;
  category: string;
  stock: number;
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
  category,
  stock,
}: ProductCardProps) {
  return (
    <Link href={`/products/${productId}`} passHref>
      <div
        className="relative w-full max-w-sm p-4 rounded-2xl shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-20 bg-white border border-opacity-30 border-white-200 overflow-hidden cursor-pointer"
        data-product-id={productId}
      >
        <ProductImage image={image} alt={alt} />
        <ProductInfo name={name} description={description} rating={rating} />
        <ProductPrice price={price} originalPrice={originalPrice} />
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          <p>Category: {category}</p>
          <p>Stock: {stock}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          {/* Placeholder for Size Selector (Optional on hover/card expansion) */}
          {/* <div className="flex space-x-2">...</div> */}
          <FavoriteToggle />
          <AddToCartButton />
        </div>
      </div>
    </Link>
  );
}
