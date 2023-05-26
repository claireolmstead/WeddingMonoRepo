import styled from '@emotion/styled';
import React from 'react';

import Container from '../../uiComponents/Container';
import { MaxWidthWrapper } from '../../uiComponents/MaxWidthWrapper';
import CreateInviteGroup from './CreateInviteGroup';
import RsvpList from './RsvpList';

const AdminContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

const Admin = () => {
  return (
    <MaxWidthWrapper>
      <AdminContainer>
        <CreateInviteGroup />
        <RsvpList />
      </AdminContainer>
    </MaxWidthWrapper>
  );
};

export default Admin;
