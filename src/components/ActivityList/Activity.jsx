import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  max-width: 300px;
  height: 215px;
  background: #fff;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 202px rgba(0,0,0,0.5);
  transition: 0.3s ease-in-out;

  &:hover {
    height: 420px;
  }
  &:hover > .content {
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.3s;
  }

  & > .imgBx {
    background-color: rgba(0,0,0,0.6);
    position: relative;
    width: 260px;
    height: 260px;
    border-radius: 4px;
    top: -60px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
  }

  & > .content {
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
`;

const Activity = (props) => {
  const {ID_PK, YEAR, SEMESTER, DETAILS, TITLE, COMPLETE} = props.activityInfo;

  return (
    <Wrapper>
      <div className='imgBx'></div>
      <div className='content'>
        <h2>{TITLE}</h2>
        <p>{DETAILS}</p>
      </div>
    </Wrapper>
  )
}

export default Activity;