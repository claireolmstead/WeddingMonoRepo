import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../../consts/vars';
import TravelImg from '../../images/CBImages/Travel.jpg';
import BCPrimaryButton from '../../uiComponents/BCPrimaryButton';
import Container from '../../uiComponents/Container';

const TravelBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${TravelImg});
  background-position: top;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    background-position: center;
  }
`;

const BlackOverlay = styled.div`
  ${(props) => props.theme.mixins.backgroundBlackOverlay};
`;

const TravelBlock = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
`;

const TravelItemsBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  max-width: 650px;
`;

const TravelTitle = styled.div`
  ${(props) => props.theme.type.cb_sub_title};
  color: ${(props) => props.theme.colors.orange};
`;

const Travel = () => {
  return (
    <>
      <TravelBackground />
      <BlackOverlay />
      <TravelBlock>
        <TravelItemsBlock>
          All wedding weekend events will take place at the _____ on the Big Island of Hawaii.
        </TravelItemsBlock>
        <TravelItemsBlock>
          <TravelTitle>Flight</TravelTitle>
          <div>
            The closest airport is the Kona International Airport, which is about a 35 minute drive
            to the hotel.
          </div>
          <div>Airport pickups are available through the hotel.</div>
        </TravelItemsBlock>
        <TravelItemsBlock>
          <TravelTitle>Accommodations</TravelTitle>
          <div>We hope that all guests are able to stay in our room block at the _____.</div>
          <div>
            For more information and to book your room please call the front desk and mention our
            wedding. 949.500.8690
          </div>
          <BCPrimaryButton>Visit Website</BCPrimaryButton>
        </TravelItemsBlock>
      </TravelBlock>
      Travel
    </>
  );
};

export default Travel;
