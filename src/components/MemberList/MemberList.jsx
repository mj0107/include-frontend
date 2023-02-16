import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Member from './Member';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: beige;
  margin: 10px;
`;

const MemberList = (props) => {
  const [graduateList, setGraduateList] = useState([]);
  const [undergraduateList, setUndergraduateList] = useState([]);

  return (
    <Wrapper>
      <ul>
        {props.memberList.map((member) => {
          return <Member key={member.ID_PK} info={member}/>;
        })}
      </ul>
    </Wrapper>
  );
};

export default MemberList;
