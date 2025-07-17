import Link from 'next/link';
import React from 'react';

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
