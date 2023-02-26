import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CORRECT_PASSWORD } from '../../consts/vars';
import Logo from '../../images/Logo.svg';
import PrimaryInput from '../../uiComponents/primaryInput';
import AuthenticateImage from './AuthenticateImage';

interface AuthenticateProps {
  setAuthenticated: () => void;
}

const AuthenticateBlock = styled.div`
  align-items: center;
  display: flex;
`;

const AuthenticateForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const AuthenticateFormImg = styled.img`
  padding-bottom: 30px;
`;

const AuthenticateSubmit = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    color: ${(props) => props.theme.colors.tan};
  }
`;

const Authenticate = ({ setAuthenticated }: AuthenticateProps) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>('');

  const onSubmit = () => {
    if (password == CORRECT_PASSWORD) {
      setAuthenticated();
      navigate('/home');
    }
  };

  return (
    <AuthenticateBlock>
      <AuthenticateImage isLight={password == CORRECT_PASSWORD} />
      <AuthenticateForm onSubmit={onSubmit}>
        <AuthenticateFormImg src={Logo} alt={''} />
        <PrimaryInput
          value={password}
          placeholder={'PASSWORD'}
          onChange={(e) => setPassword(e.target.value)}
        />
        <AuthenticateSubmit type="submit">ENTER</AuthenticateSubmit>
      </AuthenticateForm>
    </AuthenticateBlock>
  );
};
export default Authenticate;
