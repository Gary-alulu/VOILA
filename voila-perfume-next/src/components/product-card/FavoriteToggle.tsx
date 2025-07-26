'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Heart } from 'lucide-react';

interface FavoriteToggleProps {
  productId: string;
}

export default function FavoriteToggle({ productId }: FavoriteToggleProps) {
  const { data: session } = useSession();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (session) {
      // Fetch user's wishlist and check if productId is in it
      const fetchWishlist = async () => {
        const res = await fetch('/api/wishlist');
        if (res.ok) {
          const data = await res.json();
          setIsFavorite(data.wishlist.some((item: any) => item._id === productId));
        }
      };
      fetchWishlist();
    }
  }, [session, productId]);

  const toggleFavorite = async () => {
    if (!session) {
      alert('Please log in to add items to your wishlist.');
      return;
    }

    const method = isFavorite ? 'DELETE' : 'POST';
    const res = await fetch('/api/wishlist', {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    });

    if (res.ok) {
      setIsFavorite(!isFavorite);
    } else {
      alert('Failed to update wishlist.');
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 1.2 }}
      className="cursor-pointer"
      aria-label="Add to favorites"
      onClick={toggleFavorite}
    >
      <Heart fill={isFavorite ? 'red' : 'none'} stroke={isFavorite ? 'red' : 'currentColor'} />
    </motion.button>
  );
}