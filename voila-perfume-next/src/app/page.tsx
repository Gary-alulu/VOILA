import Image from 'next/image';
import HeroSection from './hero-section';

import BrandLogos from '../components/BrandLogos';
import { brandLogos } from '../data/brandLogos';
import ProductCard from '../components/ProductCard';


// Assuming you have a data file like src/data/products.ts
export default function Home() {
  const staticProducts = [
    {
      id: '1',
      productId: 'prod1',
      name: 'Midnight Bloom',
      description: 'A captivating blend of jasmine and sandalwood.',
      image: '/images/perfume1.jpg',
      alt: 'Midnight Bloom Perfume',
      price: 95.00,
      originalPrice: 120.00,
      rating: 4.5,
    },
    {
      id: '2',
      productId: 'prod2',
      name: 'Golden Hour',
      description: 'Warm notes of amber and vanilla, perfect for evenings.',
      image: '/images/perfume2.jpg',
      alt: 'Golden Hour Perfume',
      price: 110.00,
      originalPrice: 130.00,
      rating: 4.8,
    },
    {
      id: '3',
      productId: 'prod3',
      name: 'Ocean Breeze',
      description: 'Crisp and refreshing, like a walk by the sea.',
      image: '/images/perfume3.jpg',
      alt: 'Ocean Breeze Perfume',
      price: 80.00,
      originalPrice: 100.00,
      rating: 4.2,
    },
    {
      id: '4',
      productId: 'prod4',
      name: 'Forest Whisper',
      description: 'Earthy and mysterious, with hints of cedar and moss.',
      image: '/images/perfume4.jpg',
      alt: 'Forest Whisper Perfume',
      price: 105.00,
      originalPrice: 125.00,
      rating: 4.6,
    },
  ];

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
            {staticProducts.map((product) => (
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
            {staticProducts.map((product) => (
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
