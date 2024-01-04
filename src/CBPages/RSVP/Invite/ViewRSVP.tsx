import styled from '@emotion/styled';
import CheckIcon from '@mui/icons-material/Check';
import React from 'react';

import { Person } from '../../../types';
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
  flex-direction: row;
  gap: 12px;
  justify-content: center;
`;

const ViewRSVPRowItem = styled(ViewRSVPRow)`
  gap: 4px;
`;

const ViewRSVP = ({ invites }: { invites: Person[] }) => {
  return (
    <ViewRSVPBlock>
      {invites.map((invite) => (
        <div key={invite.id}>
          <Subtitle variant="sm">
            {invite.first} {invite.last}
          </Subtitle>
          <ViewRSVPRow>
            <ViewRSVPRowItem>
              <CheckIcon />
              <div>Rehearsal</div>
            </ViewRSVPRowItem>
            <ViewRSVPRowItem>
              <CheckIcon />
              <div>Welcome</div>
            </ViewRSVPRowItem>
            <ViewRSVPRowItem>
              <CheckIcon />
              <div>Wedding</div>
            </ViewRSVPRowItem>
          </ViewRSVPRow>
        </div>
      ))}
    </ViewRSVPBlock>
  );
};

export default ViewRSVP;
