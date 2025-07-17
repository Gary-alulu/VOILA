import React from 'react';

import NewImageSlider from './NewImageSlider';
import { heroImages } from '../data/heroImages';

/**
 * HeroSection component displays a full-screen hero section with a dynamic image slider.
 * It serves as the main introductory element on the landing page, showcasing key visuals.
 *
 * The background and text colors are dynamically set based on the active theme (light/dark mode).
 * - Light mode: `bg-ivoryMist` and `text-imperialGold`
 * - Dark mode: `dark:bg-velvetObsidian` and `dark:text-imperialGold`
 *
 * @returns {JSX.Element} The HeroSection component.
 */
const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-screen flex items-center justify-center bg-ivoryMist dark:bg-velvetObsidian text-imperialGold overflow-hidden">
      <NewImageSlider images={heroImages} />
    </section>
  );
};

export default HeroSection;