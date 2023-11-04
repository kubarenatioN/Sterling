import { Phone } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';
import FreeConsultingBtn from './FreeConsultingBtn';
import styles from './styles/Header.module.css';

const navItems = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About Us',
  },
  {
    path: '/services',
    label: 'Services',
  },
  {
    path: '/team',
    label: 'Team',
  },
  {
    path: '/contacts',
    label: 'Contacts',
  },
];

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Header: FC<HeaderProps> = ({ ...props }) => {
  return (
    <header
      className='container flex justify-between items-center py-6'
      {...props}>
      <nav className='text-neutral-100'>
        <ul className='flex gap-x-8'>
          {navItems.map((it, i) => {
            return (
              <li key={i} className='text-xl'>
                <Link href={it.path} className={styles.HeaderLink}>
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <FreeConsultingBtn
        text='Free call'
        size='lg'
        className='text-md'
        icon={<Phone size='sm' />}
        variant='secondary'></FreeConsultingBtn>
    </header>
  );
};

export default Header;
