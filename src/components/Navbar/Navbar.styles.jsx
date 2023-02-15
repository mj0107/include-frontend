import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background-color: #8aaae5;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Logo = styled.div`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 50%;
`;
export const Menu = styled.li`
  font-size: 18px;
  font-weight: bold;
  color: #fefefe;
  list-style: none;
`;