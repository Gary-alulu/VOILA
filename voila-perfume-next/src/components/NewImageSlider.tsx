'use client';

// NewImageSlider.tsx
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface NewImageSliderProps {
  images: string[];
}

const SLIDE_INTERVAL = 3000; // milliseconds

const NewImageSlider: React.FC<NewImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      SLIDE_INTERVAL
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <div className="w-fit flex flex-col items-center">
               <h1 className="text-white text-4xl md:text-6xl font-bold text-center">Find Your Scent</h1>
               <div className="mt-8 flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-full p-2 shadow-lg w-full">
              <div className="px-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="flex-grow bg-transparent text-white placeholder-white outline-none"
              />
              <button className="bg-[#1A1A1A] hover:bg-[#1A1A1A] text-white p-2 rounded-full transition duration-300 flex items-center justify-center w-10 h-10">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
               </button>
             </div>
           </div>
         </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default NewImageSlider;