import styled from 'styled-components';

import { NavbarContainer } from './Navbar.styles';

export const ExtendedNavbarContainer = styled(NavbarContainer)`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  height: 100%;
  font-size: 30px;
  color: #fefefe;
`

export const Wrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: block;
  }
`