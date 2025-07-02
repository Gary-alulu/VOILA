'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  children: React.ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: "easeOut" } }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white text-black text-6xl font-bold"
          >
            Voila
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
};

export default LoadingScreen;