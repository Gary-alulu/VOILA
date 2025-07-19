'use client';

import { useEffect, useState } from 'react';
import { fetchProductById } from '../../../../src/services/productService';
import { ProductCardProps } from '../../../../src/components/ProductCard';

interface ProductDetailPageProps {
  params: {
    productId: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const { productId } = params;
  const [product, setProduct] = useState<ProductCardProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await fetchProductById(productId);
        setProduct(fetchedProduct);
      } catch (err) {
        setError('Failed to fetch product details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      getProduct();
    }
  }, [productId]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading product...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-light-bg text-black dark:bg-dark-bg dark:text-white p-4 md:p-8 lg:p-12 font-sans">
      <h1 className="text-4xl md:text-5xl font-serif text-center mt-16 mb-8 md:mb-12 dark:text-white">
        {product.name}
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-full md:w-1/2">
          <img src={product.image} alt={product.alt} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-royal-purple dark:text-soft-gold mb-2">${product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-gray-500 line-through mb-4">${product.originalPrice.toFixed(2)}</p>
          )}
          <p className="text-gray-600 dark:text-gray-300">Rating: {product.rating} / 5</p>
          {/* Add more product details and an Add to Cart button here */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;