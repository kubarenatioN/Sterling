import Link from 'next/link';
import React, { FC } from 'react';

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
    <header className='container flex justify-between items-center' {...props}>
      <nav className='text-neutral-100'>
        <ul className='flex gap-x-4'>
          {navItems.map((it, i) => {
            return (
              <li key={i}>
                <Link href={it.path}>{it.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <a href='tel:123123123'>Free call</a>
    </header>
  );
};

export default Header;
