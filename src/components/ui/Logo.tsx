import React from 'react';
import Image from 'next/image';
import logoImage from '@/lib/mda-logo.png';

const Logo = ({ className }: { className?: string }) => (
  <Image
    src={logoImage}
    alt="MasterData Academy Logo"
    width={400}
    height={60}
    className={className}
    priority
  />
);

export default Logo;