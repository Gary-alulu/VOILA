'use client';

interface ProductPriceProps {
  price: number;
  originalPrice?: number;
}

export default function ProductPrice({ price, originalPrice }: ProductPriceProps) {
  return (
    <div className="flex items-center justify-center mb-4">
      <p className="text-3xl font-bold text-soft-gold mr-2">${price.toFixed(2)}</p>
      {originalPrice && (
        <p className="text-lg text-gray-500 line-through">${originalPrice.toFixed(2)}</p>
      )}
    </div>
  );
}