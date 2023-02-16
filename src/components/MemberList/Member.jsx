import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 12px;
  box-sizing: border-box;
  margin-bottom: 2px;

  display: flex;
  justify-content: space-between;

  & > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Member = (props) => {
  const { studentID, name, first_track, second_track, git_hub, email } =
    props.info;

  return (
    <Wrapper>
      <div className='student_basic_info'>
        <div className='student_id'>{studentID}</div>
        <div className='name'>{name}</div>
      </div>
      <div className='track'>
        <div className='first_track'>{first_track}</div>
        <div className='second_track'>{second_track}</div>
      </div>
      <div className='github'>{git_hub}</div>
      <div className='email'>{email}</div>
      <div>
        <div>수정</div>
        <div>삭제</div>
      </div>
    </Wrapper>
  );
};

export default Member;
