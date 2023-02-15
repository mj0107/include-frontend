import React from 'react';

import { NavbarContainer, Logo } from './Navbar.styles';
import MenuList from './MenuList';
import ExtendedNavbar from './ExtendedNavbar';

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Logo />
        <MenuList />
      </NavbarContainer>
      <ExtendedNavbar />
    </>
  );
};

export default Navbar;
