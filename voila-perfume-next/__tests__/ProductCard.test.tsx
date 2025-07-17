import React from 'react';
import ProductCard from '../../src/components/ProductCard';

const mockProduct = {
  id: '1',
  name: 'Test Product',
  description: 'This is a test product.',
  price: 99.99,
  image: '/images/test-product.jpg',
  category: 'fragrance',
  isFeatured: false,
  rating: 4.5,
  reviews: 10,
  size: ['50ml', '100ml'],
  notes: ['top', 'middle', 'base'],
  brand: 'Test Brand',
  stock: 50,
};

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test product.')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Test Product/i })).toBeInTheDocument();
  });

  it('displays Add to Cart button', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByRole('button', { name: /Add to Cart/i })).toBeInTheDocument();
  });
});