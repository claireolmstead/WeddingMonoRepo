import styled from '@emotion/styled';
import React, { useContext } from 'react';

import { CurInvitesContext } from '../../context/CurInvitesContext';
import { NewPerson, Person } from '../../types';

const InviteGroupListBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const InviteGroupListTitle = styled.div`
  ${(props) => props.theme.type.sub_page_title};
  padding-bottom: 20px;
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

const InviteGroupList = ({
  people,
  hasTitle = true,
  hasNotMe = true,
}: {
  people: NewPerson[] | Person[];
  hasTitle?: boolean;
  hasNotMe?: boolean;
}) => {
  const { setIsNotMe } = useContext(CurInvitesContext);

  return (
    <InviteGroupListBlock>
      {hasTitle && <InviteGroupListTitle>Invite Group</InviteGroupListTitle>}
      {people.map((member, i) => (
        <InviteGroupName key={member.id + i}>
          {member.first} {member.last}
        </InviteGroupName>
      ))}
      {hasNotMe && <InviteGroupIsNotMe onClick={() => setIsNotMe(true)}>Back</InviteGroupIsNotMe>}
    </InviteGroupListBlock>
  );
};

export default InviteGroupList;
