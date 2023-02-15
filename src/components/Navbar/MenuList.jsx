import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Menu } from './Navbar.styles';

const Wrapper = styled.ul`
  width: 280px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: #8aaae5;
    flex-direction: column;
    justify-content: unset;
    align-items: center;
    padding-top: 18px;
    margin: 0;

    & > * {
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }

    ${Menu} {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const MenuList = () => {
  const MENU_LIST = {
    Home: '/',
    Member: '/member',
    Activity: '/activity',
  };

  return (
    <Wrapper>
      {Object.entries(MENU_LIST).map((el, idx) => {
        let [menu, address] = el;
        return (
          <Link to={address} key={idx}>
            <Menu>{menu}</Menu>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default MenuList;
