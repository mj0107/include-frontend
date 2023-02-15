import React, { useState } from 'react';

import Menubar from './Menubar';
import {
  Wrapper,
  ExtendedNavbarContainer,
  Title,
} from './ExtendedNavbar.styles';
import { Logo } from './Navbar.styles';
import MenuList from './MenuList';

const ExtendedNavbar = () => {
  const [openMenuList, setOpenMenuList] = useState(false);

  const menubarClickHandler = () => {
    console.log(openMenuList);
    setOpenMenuList(!openMenuList);
  };

  return (
    <Wrapper>
      <ExtendedNavbarContainer>
        <Menubar clickHandler={menubarClickHandler} />
        <Title>#include</Title>
        <Logo />
      </ExtendedNavbarContainer>

      {openMenuList && <MenuList />}
    </Wrapper>
  );
};

export default ExtendedNavbar;
