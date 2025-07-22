'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '../../../src/components/ProductCard';
import { motion } from 'framer-motion';

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/admin/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success) {
          setProducts(data.data);
        } else {
          setError(data.error);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const [sortOrder, setSortOrder] = useState('featured');
  const [category, setCategory] = useState('all');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    let sortedProducts = [...products];
    if (e.target.value === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (e.target.value === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    // Re-fetch or re-filter products based on category if needed
    // For now, we'll just set the category state
  };

  if (loading) {
    return <div className="text-center text-xl mt-[25vh]">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-xl mt-[25vh] text-red-500">Error: {error}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 mt-[25vh]"
    >
      <h1 className="text-4xl font-bold text-center mb-8 font-playfair text-gray-800 dark:text-ivoryBeige">
        Our Exquisite Collection
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg text-center mb-12 font-inter text-gray-700 dark:text-gray-300"
      >
        Discover a world of captivating aromas, meticulously crafted to evoke emotions and memories. Each fragrance tells a unique story, waiting to become a part of yours.
      </motion.p>

      {/* Filtering and Sorting Options */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
        <div className="flex space-x-4">
          <select
            className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-ivoryBeige border-gray-300 dark:border-gray-600"
            onChange={handleCategoryChange}
            value={category}
          >
            <option value="all">All Categories</option>
            <option value="floral">Floral</option>
            <option value="woody">Woody</option>
            <option value="fresh">Fresh</option>
            <option value="oriental">Oriental</option>
          </select>
          <select
            className="border rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-ivoryBeige border-gray-300 dark:border-gray-600"
            onChange={handleSortChange}
            value={sortOrder}
          >
            <option value="featured">Sort by: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>
        <span className="text-gray-600 dark:text-gray-400">{products.length} Products</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            productId={product._id}
            name={product.name}
            description={product.description}
            image={product.imageUrl}
            alt={product.name} // Using product name as alt text for now
            price={product.price}
            originalPrice={product.originalPrice} // Assuming originalPrice might be part of the schema or can be added
            rating={5} // Placeholder, assuming rating will be added to schema or calculated
            category={product.category}
            stock={product.stock}
          />
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center mt-12 p-8 bg-ivoryBeige dark:bg-deepCharcoal rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-4 font-playfair text-gray-800 dark:text-ivoryBeige">
          Find Your Signature Scent
        </h2>
        <p className="text-lg font-inter text-gray-700 dark:text-gray-300 mb-6">
          Explore our full range and discover the perfect fragrance that resonates with your unique personality.
        </p>
        <button className="bg-soft-gold text-deepCharcoal px-8 py-3 rounded-md text-lg hover:bg-gold-dark transition duration-300 shadow-md">
          Shop All Perfumes
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CollectionPage;