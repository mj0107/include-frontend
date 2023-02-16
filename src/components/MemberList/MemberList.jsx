import React from 'react';
import styled from 'styled-components';
import Member from './Member';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: beige;
  margin: 10px;
`;

const MemberList = (props) => {
  return (
    <Wrapper>
      <ul>
        {props.memberList.map((member) => {
          return <Member key={member.ID_PK} info={member} onDelete={props.onDelete}/>;
        })}
      </ul>
    </Wrapper>
  );
};

export default MemberList;
