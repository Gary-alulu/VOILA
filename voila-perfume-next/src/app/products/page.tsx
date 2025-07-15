import React from 'react';
import ProductCard from '../../components/ProductCard';
import { allProducts } from '../../data/products'; // Import from centralized data

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">All Our Perfumes</h1>
      <p className="text-lg text-center mb-12 text-gray-700">Explore our complete range of fragrances, each crafted to perfection.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allProducts.map((product) => (
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
  );
};

export default ProductsPage;
