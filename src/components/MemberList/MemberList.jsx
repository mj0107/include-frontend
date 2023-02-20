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
  const openCreateFormHandler = () => {
    props.onOpenCreateForm();
  }
  const openUpdateFormHandler = () => {
    props.onOpenUpdateForm();
  }

  console.log('props.memberList: ', props.memberList);

  return (
    <Wrapper>
      <button onClick={openCreateFormHandler}>등록</button>
      <ul>
        {props.memberList.map((member) => {
          return (
            <Member
              key={member.ID_PK}
              info={member}
              onDelete={props.onDelete}
              onOpenUpdateForm={openUpdateFormHandler}
              onUpdatedPk={props.onUpdatedPk}
            />
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default MemberList;
