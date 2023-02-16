import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  & > form {
    width: 300px;
    height: 500px;
    padding: 18px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const StudentForm = (props) => {
  const onSubmitHandler = (e) => {
    console.log('submit');
    e.preventDefault();

    axios
      .post('http://localhost:8080/member/create', {
        studentID: studentId,
        name: name,
        first_track: firstTrack,
        second_track: secondTrack,
        git_hub: github,
        email: email,
        graduation: graduation,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const closeFormHandler = () => {
    props.onClose();
  }

  const [studentId, setStudentId] = useState();
  const [name, setName] = useState();
  const [firstTrack, setFirstTrack] = useState('');
  const [secondTrack, setSecondTrack] = useState('');
  const [github, setGithub] = useState();
  const [email, setEmail] = useState();
  const [graduation, setGraduation] = useState();

  return (
    <Wrapper>
      <form method="post" onSubmit={onSubmitHandler}>
        <div>
          학번:{' '}
          <input
            name="studentID"
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div>
          이름: <input name="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          1트랙:{' '}
          <input
            name="first_track"
            onChange={(e) => setFirstTrack(e.target.value)}
          />
        </div>
        <div>
          2트랙:{' '}
          <input
            name="second_track"
            onChange={(e) => setSecondTrack(e.target.value)}
          />
        </div>
        <div>
          github URL:{' '}
          <input name="git_hub" onChange={(e) => setGithub(e.target.value)} />
        </div>
        <div>
          email:{' '}
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          현재상태:
          <input
            type="checkbox"
            name="graduation"
            value="0"
            onChange={(e) => setGraduation(e.target.value)}
          />{' '}
          재학
          <input
            type="checkbox"
            name="graduation"
            value="1"
            onChange={(e) => setGraduation(e.target.value)}
          />{' '}
          졸업
        </div>

        <div className="footer">
          <input type="submit" />
          <input type="button" value="닫기" onClick={closeFormHandler}/>
        </div>
      </form>
    </Wrapper>
  );
};

export default StudentForm;
