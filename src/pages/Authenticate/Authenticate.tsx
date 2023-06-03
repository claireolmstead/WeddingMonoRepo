import styled from '@emotion/styled';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CORRECT_PASSWORD } from '../../consts/vars';
import { CurInvitesContext } from '../../context/CurInvitesContext';
import { getInvites } from '../../hooks/getInvitesFromId';
import Container from '../../uiComponents/Container';
import PrimaryButton from '../../uiComponents/PrimaryButton';
import PrimaryInput from '../../uiComponents/PrimaryInput';
import InviteGroupList from '../Admin/InviteGroupList';

interface AuthenticateProps {
  setAuthenticated: () => void;
}

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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-around;
`;

const AuthenticateInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
    <Container>
      <AuthenticateBlock>
        <AuthenticateFormTitle>Sterling & Nick</AuthenticateFormTitle>
        <AuthenticateForm>
          <AuthenticateInputs>
            <AuthenticateInputBlock>
              {!isConfirmed && (
                <PrimaryInput
                  value={name}
                  placeholder={'First Last'}
                  onChange={handleOnNameChange}
                />
              )}
              {invites && invites.length > 0 && (
                <InviteGroupList people={invites} hasTitle={false} hasNotMe={false} />
              )}
              {isNotFound && <div>Not found. Make sure name is as appears on the invite.</div>}
            </AuthenticateInputBlock>
            <AuthenticateInputBlock>
              {(!(isConfirmed && !hasPasswordError) || hasPasswordError) && (
                <PrimaryInput
                  value={password}
                  placeholder={'Password'}
                  onChange={handleOnPasswordChange}
                />
              )}
              {hasPasswordError && <div>Incorrect Password.</div>}
            </AuthenticateInputBlock>
          </AuthenticateInputs>
          {isConfirmed ? (
            <>
              <PrimaryButton onClick={onConfirm}>Confirm</PrimaryButton>
              <div onClick={() => setIsConfirmed(false)}>Back</div>
            </>
          ) : (
            <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
          )}
        </AuthenticateForm>
      </AuthenticateBlock>
    </Container>
  );
};
export default Authenticate;
