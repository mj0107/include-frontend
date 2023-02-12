import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarContainer, Logo, NavbarLeft, Menu } from './Navbar.styles';

const Navbar = () => {
  const MENU_LIST = {
    Home: '/',
    Member: '/member',
    Activity: '/activity',
  };

  return (
    <NavbarContainer>
      <Logo />
      <NavbarLeft>
        {Object.entries(MENU_LIST).map((el, idx) => {
          let [menu, address] = el;
          return (
            <Link to={address} key={idx}>
              <Menu>{menu}</Menu>
            </Link>
          );
        })}
      </NavbarLeft>
    </NavbarContainer>
  );
};

export default Navbar;
