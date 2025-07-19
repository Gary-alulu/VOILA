import Link from 'next/link';
import React from 'react';

/**
 * @typedef {'scale' | 'translate-x'} HoverEffect
 */

/**
 * @interface AnimatedLinkProps
 * @property {string} href - The URL to navigate to.
 * @property {React.ReactNode} children - The content to be rendered inside the link.
 * @property {string} [className=''] - Additional CSS classes to apply to the link.
 * @property {HoverEffect} [hoverEffect='translate-x'] - The type of hover animation effect to apply.
 */

/**
 * `AnimatedLink` is a reusable component that renders a navigation link with a dynamic hover animation.
 * It uses `next/link` for client-side transitions and applies Tailwind CSS classes for styling and animation.
 *
 * @param {AnimatedLinkProps} props - The properties for the AnimatedLink component.
 * @returns {JSX.Element} A React component that renders an animated link.
 */

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'scale' | 'translate-x';
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  className = '',
  hoverEffect = 'translate-x',
}) => {
  const effectClasses = {
    'scale': 'transform hover:scale-110',
    'translate-x': 'transform hover:translate-x-1',
  };

  return (
    <Link
      href={href}
      className={`text-mistGray hover:text-imperialGold transition-colors ${effectClasses[hoverEffect]} ${className} dark:text-cloudedPearl dark:hover:text-imperialGold`}
    >
      {children}
    </Link>
  );
};

export default AnimatedLink;
