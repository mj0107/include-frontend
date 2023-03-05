import React, { useState } from 'react';
import useLoginStore from '../../store/loginStore';

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

  const login = useLoginStore((state) => state.actions.login);

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      id: id,
      pwd: pw,
    };

    login(loginData);
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
            name="id"
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
            name="pwd"
          ></input>
        </Input>
        <LoginButton>Login</LoginButton>
      </Container>
    </Wrapper>
  );
};

export default LoginForm;
