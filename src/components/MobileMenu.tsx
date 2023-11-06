'use client';

import { useMenu } from '@/lib/hooks/useMenu.hook';
import { cn } from '@/lib/utils';
import { MenuSquare, X } from 'lucide-react';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import styles from './styles/Header.module.css';

interface MobileMenuProps {}

const MobileMenu: FC<MobileMenuProps> = ({}) => {
  const [isOpened, setIsOpened] = useState(false);
  const navItems = useMenu();

  const onMenuToggle = () => {
    setIsOpened((prev) => !prev);
  };

  useEffect(() => {
    const html = document.documentElement;
    if (isOpened) {
      html.classList.add('overflow-y-hidden', 'h-[100%]');
    } else {
      html.classList.remove('overflow-y-hidden', 'h-[100%]');
    }
  }, [isOpened]);

  const onResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    addEventListener('resize', onResize);

    return () => {
      removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className={cn('text-zinc-100 fixed top-0 h-0 z-[100]')}>
      <button
        onClick={onMenuToggle}
        aria-label='Open mobile menu'
        type='button'
        className={cn(
          'absolute z-[102] top-2 right-4 flex justify-center items-center bg-neutral-900 p-1.5 rounded-md'
        )}>
        <MenuSquare width={24} height={24} />
      </button>
      <div
        className={cn(
          'transition-transform duration-150 h-[100vh] w-[100vw] bg-neutral-100 flex items-center justify-center',
          isOpened ? 'translate-x-0' : '-translate-x-full'
        )}>
        <header>
          <nav className='text-neutral-800 mx-auto'>
            <ul className='flex flex-col items-center gap-y-2 text-sm sm:text-base'>
              {navItems.map((it, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={it.path}
                      onClick={onMenuToggle}
                      className={cn(styles.HeaderLink, 'w-full')}>
                      {it.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <button
                  aria-label='Close mobile menu'
                  type='button'
                  onClick={onMenuToggle}
                  className='rounded-full p-1 bg-neutral-800'>
                  <X width={20} height={20} className='text-zinc-100'></X>
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default MobileMenu;
