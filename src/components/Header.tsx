import { useMenu } from '@/lib/hooks/useMenu.hook';
import { cn } from '@/lib/utils';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';
import FreeConsultingBtn from './FreeConsultingBtn';
import styles from './styles/Header.module.css';

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Header: FC<HeaderProps> = ({ ...props }) => {
  const navItems = useMenu();

  return (
    <div className=''>
      <header
        {...props}
        className='container flex justify-between items-center'>
        <nav className='text-neutral-100'>
          <ul className='flex xl:gap-x-8 gap-x-4'>
            {navItems.map((it, i) => {
              return (
                <li key={i} className='xl:text-xl text-base'>
                  <Link
                    href={it.path}
                    className={cn(styles.HeaderLink, 'after:bg-zinc-100')}>
                    {it.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <FreeConsultingBtn
          text='Get free consulting'
          size='sm'
          className='text-md'
          icon={<Phone size='20' />}
          variant='secondary'></FreeConsultingBtn>
      </header>
    </div>
  );
};

export default Header;
