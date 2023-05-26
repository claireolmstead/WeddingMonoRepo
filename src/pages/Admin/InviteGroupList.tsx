import styled from '@emotion/styled';
import React from 'react';

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

const InviteGroupList = ({ people }: { people: NewPerson[] | Person[] }) => {
  return (
    <InviteGroupListBlock>
      <InviteGroupListTitle>Invite Group</InviteGroupListTitle>
      {people.map((member, i) => (
        <div key={member.id + i}>
          {member.first} {member.last}
        </div>
      ))}
    </InviteGroupListBlock>
  );
};

export default InviteGroupList;
