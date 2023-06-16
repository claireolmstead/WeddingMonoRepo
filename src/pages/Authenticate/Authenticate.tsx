import styled from '@emotion/styled';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CORRECT_PASSWORD } from '../../consts/vars';
import { CurInvitesContext } from '../../context/CurInvitesContext';
import { getInvites } from '../../hooks/getInvitesFromId';
import LoginBackgroundImg from '../../images/LoginBackgroundImg.jpg';
import Container from '../../uiComponents/Container';
import PrimaryButton from '../../uiComponents/PrimaryButton';
import PrimaryInput from '../../uiComponents/PrimaryInput';
import InviteGroupList from '../Admin/InviteGroupList';

interface AuthenticateProps {
  setAuthenticated: () => void;
}

const AuthenticateBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${LoginBackgroundImg});
  background-position: top;
`;

const AuthenticateBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding-top: 40px;
  position: relative;
`;

const AuthenticateForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`;

const AuthenticateFormTitle = styled.div`
  color: ${(props) => props.theme.colors.orange};
  ${(props) => props.theme.type.main_title};
  text-align: center;
`;

const AuthenticateInputs = styled.div`
  align-items: start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-around;
`;

const AuthenticateInputBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

enum passwordStatusType {
  'NOTCONFIRMED' = 'NOTCONFIRMED',
  'CONFIRMED' = 'CONFIRMED',
  'ERROR' = 'ERROR',
}

enum lookupStatusType {
  'NOINVITES' = 'NOINVITES',
  'NOTCONFIRMED' = 'NOTCONFIRMED',
  'CONFIRMED' = 'CONFIRMED',
}

const Authenticate = ({ setAuthenticated }: AuthenticateProps) => {
  const { invites, setInvites } = useContext(CurInvitesContext);
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  const [passwordStatus, setPasswordStatus] = useState<passwordStatusType>(
    passwordStatusType.NOTCONFIRMED
  );
  const [lookupStatus, setLookupStatus] = useState<lookupStatusType>(lookupStatusType.NOINVITES);

  useEffect(() => {
    if (invites && invites.length > 0) {
      setLookupStatus(lookupStatusType.NOTCONFIRMED);
    } else {
      setLookupStatus(lookupStatusType.NOINVITES);
    }
  }, [invites]);

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
    if (password.toLowerCase() === CORRECT_PASSWORD) {
      setPasswordStatus(passwordStatusType.CONFIRMED);
      setAuthenticated();
      navigate('/home');
    } else {
      setPasswordStatus(passwordStatusType.ERROR);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!invites || (invites && invites.length === 0)) {
      await inviteLookup();
      setName('');
    }

    if (password.toLowerCase() === CORRECT_PASSWORD) {
      setPasswordStatus(passwordStatusType.CONFIRMED);
    } else {
      setPasswordStatus(passwordStatusType.ERROR);
      setPassword('');
    }
  };

  const handleOnNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    if (isNotFound) setIsNotFound(false);
  };

  const handleOnPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    if (passwordStatus === passwordStatusType.ERROR)
      setPasswordStatus(passwordStatusType.NOTCONFIRMED);
  };

  return (
    <>
      <AuthenticateBackground />
      <Container>
        <AuthenticateBlock>
          <AuthenticateFormTitle>Sterling & Nick</AuthenticateFormTitle>
          <AuthenticateForm>
            <AuthenticateInputs>
              <AuthenticateInputBlock>
                <PrimaryInput
                  value={name}
                  placeholder={'First Last'}
                  onChange={handleOnNameChange}
                />
                {invites && passwordStatus !== passwordStatusType.ERROR && (
                  <InviteGroupList people={invites} hasTitle={false} hasNotMe={false} />
                )}
                {isNotFound && <div>Not found. Make sure name is as appears on the invite.</div>}
              </AuthenticateInputBlock>
              <AuthenticateInputBlock>
                {passwordStatus !== passwordStatusType.CONFIRMED && (
                  <PrimaryInput
                    value={password}
                    placeholder={'Password'}
                    onChange={handleOnPasswordChange}
                  />
                )}
                {passwordStatus === passwordStatusType.ERROR && <div>Incorrect Password.</div>}
              </AuthenticateInputBlock>
            </AuthenticateInputs>
            {lookupStatus === lookupStatusType.NOINVITES ||
            passwordStatus !== passwordStatusType.CONFIRMED ? (
              <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
            ) : (
              <>
                <PrimaryButton onClick={onConfirm}>Confirm</PrimaryButton>
                <div onClick={() => setLookupStatus(lookupStatusType.NOINVITES)}>Back</div>
              </>
            )}
          </AuthenticateForm>
        </AuthenticateBlock>
      </Container>
    </>
  );
};
export default Authenticate;
