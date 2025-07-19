'use client';


import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  children: React.ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
  // This component is intended to be a placeholder for a loading screen.
  // The `isLoading` state is immediately set to `false` to prevent any artificial delays.
  // If a real loading screen is needed in the future, the logic here can be updated.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white text-black text-6xl font-bold">
          Voila
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingScreen;