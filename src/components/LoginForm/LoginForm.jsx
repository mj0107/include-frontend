import axios from 'axios';
import React, { useState } from 'react';

import {
  Wrapper,
  Container,
  Title,
  LoginButton,
  Input,
  CloseButton,
} from './LoginForm.styles';

const LoginForm = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      id: id,
      pwd: pw,
    };

    axios
      .post(`http://localhost:8080/login`, loginData)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <Wrapper>
      <Container onSubmit={submitHandler}>
        <Title>
          <CloseButton>+</CloseButton>
          Login To Admin Account
        </Title>
        <Input>
          <input
            type="text"
            placeholder="ID"
            onChange={(e) => setId(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
          ></input>
        </Input>
        <LoginButton>Login</LoginButton>
      </Container>
    </Wrapper>
  );
};

export default LoginForm;
