import React from 'react';
import styled from 'styled-components';

const StyledMenubar = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 100%;
  }
`;

const Menubar = (props) => {
  return (
    <StyledMenubar onClick={props.clickHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fefefe"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </StyledMenubar>
  );
};

export default Menubar;
