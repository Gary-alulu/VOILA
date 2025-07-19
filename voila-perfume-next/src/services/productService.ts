import { ProductCardProps } from '../components/ProductCard';
import { popularProducts } from '../data/popularProducts';
import { newArrivals } from '../data/newArrivals';
import { ProductCardProps } from '../components/ProductCard';

// Simulate an API call to fetch products with potential errors
export async function fetchProducts(type: 'popular' | 'newArrivals'): Promise<ProductCardProps[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a 20% chance of failure
      if (Math.random() < 0.2) {
        reject(new Error(`Failed to fetch ${type} products.`));
        return;
      }

      if (type === 'popular') {
        resolve(popularProducts);
      } else if (type === 'newArrivals') {
        resolve(newArrivals);
      } else {
        resolve([]);
      }
    }, 1000); // Simulate network delay
  });
}

export const fetchProductById = (productId: string): Promise<ProductCardProps | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allProducts = [...popularProducts, ...newArrivals];
      const product = allProducts.find(p => p.productId === productId);
      resolve(product || null);
    }, 500);
  });
};