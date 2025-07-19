'use client';

import Image from 'next/image';
import HeroSection from './hero-section';

import BrandLogos from '../components/BrandLogos';
import { brandLogos } from '../data/brandLogos';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/productService';
import { useState, useEffect } from 'react';
import { ProductCardProps } from '../components/ProductCard';

export default function Home() {
  const [popularProducts, setPopularProducts] = useState<ProductCardProps[]>([]);
  const [newArrivals, setNewArrivals] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedPopular = await fetchProducts('popular');
        setPopularProducts(fetchedPopular);

        const fetchedNewArrivals = await fetchProducts('newArrivals');
        setNewArrivals(fetchedNewArrivals);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    getProducts();
  }, []);


  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      {/* Brand Carousel */}
      <section className="w-full py-12 bg-light-bg-alt dark:bg-dark-bg-alt">
        <BrandLogos logos={brandLogos} />
      </section>

      {/* Product Sections */}
      <section className="w-full py-16 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair text-center mb-12">
            Our Collection
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {popularProducts.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.productId}
                name={product.name}
                description={product.description}
                image={product.image}
                alt={product.alt}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="w-full py-16 bg-light-bg-alt dark:bg-dark-bg-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair text-center mb-12">
            New Arrivals
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.productId}
                name={product.name}
                description={product.description}
                image={product.image}
                alt={product.alt}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </section>





    </main>
  );
}
