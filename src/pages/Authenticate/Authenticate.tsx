import styled from '@emotion/styled';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CORRECT_PASSWORD } from '../../consts/vars';
import { CurInvitesContext } from '../../context/CurInvitesContext';
import { getInvites } from '../../hooks/getInvitesFromId';
import Logo from '../../images/Logo.svg';
import PrimaryButton from '../../uiComponents/PrimaryButton';
import PrimaryInput from '../../uiComponents/PrimaryInput';
import InviteGroupList from '../Admin/InviteGroupList';
import AuthenticateImage from './AuthenticateImage';

interface AuthenticateProps {
  setAuthenticated: () => void;
}

const AuthenticateBlock = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

const AuthenticateForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  margin: 0 auto;
`;

const AuthenticateFormImg = styled.img`
  padding-bottom: 30px;
  width: 100px;
`;

const Authenticate = ({ setAuthenticated }: AuthenticateProps) => {
  const { isNotMe, setIsNotMe, invites, setInvites } = useContext(CurInvitesContext);
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isNotFound, setIsNotFound] = useState<boolean>(false);
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (isNotMe) {
      setIsConfirmed(false);
    }
  }, [isNotMe]);

  const inviteLookup = async () => {
    const personId = name.toLowerCase().replace(/ /g, '');
    const inviteList = await getInvites(personId);
    if (!inviteList) {
      setIsNotFound(true);
      setInvites([]);
    } else {
      setInvites(inviteList);
    }
  };

  const onConfirm = () => {
    setAuthenticated();
    navigate('/home');
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsNotMe(false);
    invites && invites.length === 0 && (await inviteLookup());
    setName('');
    setPassword('');
    if (invites && invites.length > 0 && password === CORRECT_PASSWORD) {
      setIsConfirmed(true);
      setHasPasswordError(false);
    }
    if (password !== CORRECT_PASSWORD) {
      setHasPasswordError(true);
    }
  };

  const handleOnNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    setIsNotFound(false);
  };

  const handleOnPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setHasPasswordError(false);
  };

  return (
    <AuthenticateBlock>
      <AuthenticateImage isLight={password == CORRECT_PASSWORD} />
      <AuthenticateForm>
        <AuthenticateFormImg src={Logo} alt={''} />
        {invites &&
          (invites.length === 0 || isNotMe || isNotFound ? (
            <PrimaryInput value={name} placeholder={'First Last'} onChange={handleOnNameChange} />
          ) : (
            <InviteGroupList people={invites} />
          ))}
        {isNotFound && <div>Not found. Make sure name is as appears on the invite.</div>}
        {(!(isConfirmed && !hasPasswordError) || hasPasswordError) && (
          <PrimaryInput
            value={password}
            placeholder={'PASSWORD'}
            onChange={handleOnPasswordChange}
          />
        )}
        {hasPasswordError && <div>Incorrect Password.</div>}
        {isConfirmed ? (
          <PrimaryButton onClick={onConfirm}>Confirm</PrimaryButton>
        ) : (
          <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
        )}
      </AuthenticateForm>
    </AuthenticateBlock>
  );
};
export default Authenticate;
