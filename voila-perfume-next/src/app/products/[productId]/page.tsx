'use client';

import { useEffect, useState } from 'react';
import { fetchProductById, fetchRelatedProducts } from '../../../../src/services/productService';
import { ProductCardProps } from '../../../../src/components/ProductCard';
import ProductReviews from '../../../../src/components/ProductReviews';
import ProductCard from '../../../../src/components/ProductCard';
import { FaHeart } from 'react-icons/fa';

interface ProductDetailPageProps {
  params: {
    productId: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const { productId } = params;
  const [product, setProduct] = useState<ProductCardProps | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await fetchProductById(productId);
        setProduct(fetchedProduct);

        const fetchedRelatedProducts = await fetchRelatedProducts(productId);
        setRelatedProducts(fetchedRelatedProducts);
      } catch (err) {
        setError('Failed to fetch product details or related products.');
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
          <img src={product.imageUrl} alt={product.alt} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-royal-purple dark:text-soft-gold mb-2">${product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="text-gray-500 line-through mb-4">${product.originalPrice.toFixed(2)}</p>
          )}
          <p className="text-gray-600 dark:text-gray-300">Rating: {product.rating} / 5</p>
          <div className="mt-4">
            <button className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-md shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
              <FaHeart className="mr-2" /> Add to Wishlist
            </button>
          </div>
          {/* Add more product details and an Add to Cart button here */}
        </div>
      </div>
      <ProductReviews productId={product._id} reviews={[]} /> {/* Placeholder for reviews */}

      {relatedProducts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct._id} {...relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;