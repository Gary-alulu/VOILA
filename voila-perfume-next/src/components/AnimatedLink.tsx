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
      className={`text-neutral-400 hover:text-[#D4AF37] transition-colors ${effectClasses[hoverEffect]} ${className}`}
    >
      {children}
    </Link>
  );
};

export default AnimatedLink;
