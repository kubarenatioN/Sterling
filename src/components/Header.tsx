import React, { FC } from 'react';

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const Header: FC<HeaderProps> = ({ ...props }) => {
  return <header {...props}>Header</header>;
};

export default Header;
