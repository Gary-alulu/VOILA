export const allProducts = Array.from({ length: 20 }, (_, i) => ({
  id: String(i + 1),
  productId: `prod${i + 1}`,
  name: `Perfume ${i + 1}`,
  description: `A unique scent for Perfume ${i + 1}.`,
  image: `/images/perfume${(i % 4) + 1}.jpg`,
  alt: `Perfume ${i + 1}`,
  price: 50.00 + (i * 5),
  originalPrice: 60.00 + (i * 5),
  rating: (Math.random() * (5 - 3) + 3).toFixed(1),
}));