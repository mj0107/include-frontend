import React from 'react';

import {
  Wrapper,
  Container,
  Title,
  LoginButton,
  Input,
  CloseButton,
} from './LoginForm.styles';

const LoginForm = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <CloseButton>+</CloseButton>
          Login To Admin Account
        </Title>
        <Input>
          <input type="text" placeholder="ID"></input>
          <input type="password" placeholder="Password"></input>
        </Input>
        <LoginButton>Login</LoginButton>
      </Container>
    </Wrapper>
  );
};

export default LoginForm;
