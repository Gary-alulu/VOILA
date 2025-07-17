import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  size?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = '1em', className = '' }) => {
  return <IconComponent size={size} className={className} />;
};

export default Icon;