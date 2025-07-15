'use client';

interface ProductInfoProps {
  name: string;
  description: string;
  rating: number;
}

export default function ProductInfo({ name, description, rating }: ProductInfoProps) {
  return (
    <div className="text-center mb-4">
      <p className="font-playfair text-2xl font-semibold text-gray-900">{name}</p>
      <p className="font-inter text-sm text-gray-600">{description}</p>
      <div className="flex items-center justify-center mt-2" aria-label={`Rated ${rating} out of 5 stars`}>
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-gray-700 ml-1">{rating}</span>
      </div>
    </div>
  );
}