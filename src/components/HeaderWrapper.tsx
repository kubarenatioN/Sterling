'use client';

import { cn } from '@/lib/utils';
import { FC, useEffect, useState } from 'react';
import Header from './Header';

interface HeaderWrapperProps {
  children?: React.ReactNode;
}

const HeaderWrapper: FC<HeaderWrapperProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 10);
  };

  useEffect(() => {
    addEventListener('scroll', onScroll);

    return () => {
      removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          'md:block hidden',
          'fixed z-[100] top-0 left-0 right-0 transition-all duration-300',
          isScrolled ? 'bg-neutral-800 py-2' : 'bg-neutral-800/50 py-4'
        )}>
        <Header></Header>
      </div>
    </>
  );
};

export default HeaderWrapper;
