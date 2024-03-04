import styled from '@emotion/styled';
import { Check, Close } from '@mui/icons-material';
import React from 'react';

import { ScreenSizes } from '../../../consts/vars';
import { BeachDay, Ceremony, Person, Welcome } from '../../../types';
import { Subtitle } from '../../../uiComponents/Subtitle';

const ViewRSVPBlock = styled.div`
  ${(props) => props.theme.type.cb_small_body};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ViewRSVPRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    flex-direction: row;
  }
`;

const ViewRSVPRowItem = styled(ViewRSVPRow)`
  gap: 4px;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const ViewRSVP = ({ invites }: { invites: Person[] }) => {
  return (
    <ViewRSVPBlock>
      {invites.map((invite) => (
        <div key={invite.id}>
          <Subtitle>
            {invite.first} {invite.last}
          </Subtitle>
          <ViewRSVPRow>
            <ViewRSVPRowItem>
              {invite.welcome === Welcome.ATTENDING ? <Check /> : <Close />}
              <div>Welcome Party</div>
            </ViewRSVPRowItem>
            <ViewRSVPRowItem>
              {invite.ceremony === Ceremony.ATTENDING ? <Check /> : <Close />}
              <div>Wedding</div>
            </ViewRSVPRowItem>
            <ViewRSVPRowItem>
              {invite.beachDay === BeachDay.ATTENDING ? <Check /> : <Close />}
              <div>Beach Day</div>
            </ViewRSVPRowItem>
          </ViewRSVPRow>
        </div>
      ))}
    </ViewRSVPBlock>
  );
};

export default ViewRSVP;
