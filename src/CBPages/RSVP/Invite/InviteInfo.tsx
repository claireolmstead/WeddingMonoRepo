import styled from '@emotion/styled';
import React from 'react';

const InviteNames = styled.div`
  ${(props) => props.theme.type.cb_sub_title};
`;

const InviteInfo = () => {
  return (
    <>
      <div>We invite you to the wedding of</div>
      <InviteNames>Claire Olmstead</InviteNames>
      <div>to</div>
      <InviteNames>Brooks Clark</InviteNames>
      <div>___ Hotel</div>
      <div>1.25.25</div>
    </>
  );
};

export default InviteInfo;
