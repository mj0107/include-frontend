import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8aaae5;
  position: absolute;
  top: 0;
`;

export const Container = styled.form`
  width: 500px;
  height: 300px;
  background-color: white;
  padding: 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const LoginButton = styled.button`
  background-color: #8aaae5;
  color: #fefefe;
  border-style: none;
  width: 100px;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  & > input {
    border-style: none;
    border-bottom: 1px solid #8aaae5;
    padding: 4px;
    width: 200px;
    outline: none;
  }
  & > input::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;

  width: 20px;
  height: 20px;
  position: relative;
  top: -35px;
  left: 400px;
  transform: rotate(45deg);
  font-size: 40px;

  &:hover {
    opacity: 0.5;
  }
`;
