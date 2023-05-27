import styled from '@emotion/styled';
import React, { useContext } from 'react';

import { CurInvitesContext } from '../../context/CurInvitesContext';
import { NewPerson, Person } from '../../types';

const InviteGroupListBlock = styled.div`
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const InviteGroupListTitle = styled.div`
  ${(props) => props.theme.type.sub_title};
  padding: 20px 0;
`;

const InviteGroupName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const InviteGroupIsNotMe = styled.div`
  cursor: pointer;
  padding-top: 20px;
  text-decoration: underline;
`;

const InviteGroupList = ({ people }: { people: NewPerson[] | Person[] }) => {
  const { setIsNotMe } = useContext(CurInvitesContext);

  return (
    <InviteGroupListBlock>
      <InviteGroupListTitle>Invite Group</InviteGroupListTitle>
      {people.map((member, i) => (
        <InviteGroupName key={member.id + i}>
          {member.first} {member.last}
        </InviteGroupName>
      ))}
      <InviteGroupIsNotMe onClick={() => setIsNotMe(true)}>Not you?</InviteGroupIsNotMe>
    </InviteGroupListBlock>
  );
};

export default InviteGroupList;
