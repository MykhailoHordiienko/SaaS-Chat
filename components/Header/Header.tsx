import React from 'react';
import Logo from '../Logo/Logo';

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav>
        <Logo />
      </nav>
    </header>
  );
};

export default Header;
