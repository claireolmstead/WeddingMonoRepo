import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../../../consts/vars';
import { Person } from '../../../types';

const NamesBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
  margin-bottom: 40px;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    max-width: 350px;
    padding-right: 20px;
    text-align: right;
    border-right: 3px solid white;
    margin-bottom: 0;
  }
`;

const Name = styled.div<{ active: boolean }>`
  font-size: 18px;
  letter-spacing: 4px;
  text-decoration: ${(props) => props.active && 'underline'};
  text-transform: uppercase;
`;

const EditInviteNames = ({ invites, activeIndex }: { invites: Person[]; activeIndex: number }) => {
  return (
    <NamesBlock>
      {invites.map((invite, i) => (
        <Name key={invite.id} active={i === activeIndex}>
          {invite.first} {invite.last}
        </Name>
      ))}
    </NamesBlock>
  );
};

export default EditInviteNames;
