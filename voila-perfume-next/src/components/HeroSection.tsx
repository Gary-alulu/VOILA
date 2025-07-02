import React from 'react';



import { heroImages } from '../data/heroImages';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-screen flex items-center justify-center bg-white text-gray-900 overflow-hidden">
      <NewImageSlider images={heroImages} />
    </section>
  );
};

export default HeroSection;