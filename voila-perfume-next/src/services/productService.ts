import { ProductCardProps } from '../components/ProductCard';
import { ProductCardProps } from '../components/ProductCard';

export async function fetchProducts(
  section?: string,
  page: number = 1,
  limit: number = 10,
  filters?: {
    name?: string;
    brand?: string;
    notes?: string;
    minPrice?: number;
    maxPrice?: number;
    scentFamily?: string;
    size?: string;
  }
): Promise<ProductCardProps[]> {
  try {
    let url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());

    if (section) {
      url.searchParams.append('section', section);
    }

    if (filters) {
      for (const [key, value] of Object.entries(filters)) {
        if (value !== undefined && value !== null && value !== '') {
          url.searchParams.append(key, value.toString());
        }
      }
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

export const fetchProductById = async (productId: string): Promise<ProductCardProps | null> => {
  try {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error(`Failed to fetch product with ID ${productId}:`, error);
    return null;
  }
};

export const fetchRelatedProducts = async (productId: string, limit: number = 4): Promise<ProductCardProps[]> => {
  try {
    const response = await fetch(`/api/products/${productId}/related?limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error(`Failed to fetch related products for ${productId}:`, error);
    return [];
  }
};