import styled from '@emotion/styled';
import React, { useState } from 'react';

import PrimaryInput from '../uiComponents/PrimaryInput';

const LoginDropdown = styled.div<{ isOpen: boolean }>`
  align-items: center;
  backdrop-filter: brightness(90%) blur(30px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transform: ${(props) => (props.isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top left;
  transition: 0.4s ease-in-out;
  width: 100vw;
  z-index: 100;
`;

const EnterBtn = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = ({
  handlePassword,
  isOpen,
}: {
  handlePassword: (isCorrect: boolean) => void;
  isOpen: boolean;
}) => {
  const [password, setPassword] = useState<string>('');
  console.log('ISOPEN', isOpen);

  const onPasswordEnter = (password: string) => {
    const isCorrect = password.toLowerCase() === 'aloha';
    window.localStorage.setItem('isAuthenticated', isCorrect.toString());
    handlePassword(isCorrect);
  };

  return (
    <LoginDropdown isOpen={isOpen}>
      <PrimaryInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <EnterBtn onClick={() => onPasswordEnter(password)}>SUBMIT</EnterBtn>
    </LoginDropdown>
  );
};

export default Login;
