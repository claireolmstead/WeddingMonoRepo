import styled from '@emotion/styled';
import React from 'react';

const InviteNames = styled.div`
  ${(props) => props.theme.type.cb_sub_title};
  font-size: 40px;
`;

const InviteItalics = styled.div`
  ${(props) => props.theme.type.cb_body_italics};
  letter-spacing: 4px;
`;

const InviteLocation = styled.div`
  ${(props) => props.theme.type.cb_sub_title};
  font-size: 28px;
  padding-top: 8px;
`;

const InviteDatePlace = styled.div`
  ${(props) => props.theme.type.cb_large_body};
  font-size: 18px;
  text-transform: uppercase;
`;

const AdditionalInfo = styled.div`
  padding-top: 30px;
`;

const InviteInfo = () => {
  return (
    <>
      <InviteItalics>Please join us for the wedding of</InviteItalics>
      <InviteNames>Virginia Claire Olmstead</InviteNames>
      <InviteItalics>to</InviteItalics>
      <InviteNames>Brooks David Clark</InviteNames>
      <AdditionalInfo>
        <InviteDatePlace>January 18, 2025</InviteDatePlace>
        <InviteLocation>Mauna Kea Beach Hotel</InviteLocation>
        <InviteDatePlace>Kohala Coast, Hawai’i</InviteDatePlace>
      </AdditionalInfo>
    </>
  );
};

export default InviteInfo;
