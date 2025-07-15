export interface Product {
  id: string;
  productId: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  price: number;
  originalPrice?: number; // Optional if not all products have it
  rating: string;
}