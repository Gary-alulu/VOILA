import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import User from '@/models/User';
import ProductCard from '@/components/ProductCard';
import connectMongoDB from '@/lib/mongodb';

export default async function WishlistPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        <p>Please log in to view your wishlist.</p>
      </div>
    );
  }

  await connectMongoDB();
  const user = await User.findById(session.user.id).populate('wishlist');

  if (!user || user.wishlist.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        <p>Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {user.wishlist.map((product: any) => (
          <ProductCard
            key={product._id}
            _id={product._id}
            name={product.name}
            description={product.description}
            imageUrl={product.imageUrl}
            alt={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
            category={product.category}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  );
}