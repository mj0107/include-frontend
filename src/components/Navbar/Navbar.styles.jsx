import styled from 'styled-components';

export const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background-color: #8aaae5;
  padding: 8px;
  box-sizing: border-box;
`;
export const Logo = styled.div`
  width: 44px;
  height: 100%;
  background-color: black;
  border-radius: 50%;
`;
export const NavbarLeft = styled.ul`
  width: 280px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
export const Menu = styled.li`
  font-size: 18px;
  font-weight: bold;
  color: #fefefe;
  list-style: none;
`;