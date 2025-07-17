'use client';

import Image from 'next/image';
import { useTheme } from '@/components/ThemeProvider';
import { motion } from 'framer-motion';
import { LIGHT_MODE_LOGO_FILTER, DARK_MODE_LOGO_FILTER } from '@/utils/themeFilters';

interface BrandLogosProps {
  logos: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

const BrandLogos: React.FC<BrandLogosProps> = ({ logos }) => {
  const { theme } = useTheme();

  const filterStyle =
    theme === 'dark'
      ? DARK_MODE_LOGO_FILTER
      : LIGHT_MODE_LOGO_FILTER

  return (
    <div className="w-full overflow-hidden py-12">
      <div className="flex items-center justify-around">
        {logos
          .filter(logo => !logo.src.includes('cdn.brandfetch.io'))
          .map((logo, index) => (
          <motion.div
            key={`logo-${index}`}
            className="flex-shrink-0 px-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              style={{ filter: filterStyle }}
              className="rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
