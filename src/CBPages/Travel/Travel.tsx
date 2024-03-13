import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../../consts/vars';
import TravelImg from '../../images/CBImages/Travel.jpg';
import BCPrimaryButton from '../../uiComponents/BCPrimaryButton';
import Container from '../../uiComponents/Container';
import { PageTitle } from '../../uiComponents/PageTitle';

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
  text-align: center;
`;

const TravelItemsBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  max-width: 560px;
`;

const TravelSubTitle = styled.div`
  @keyframes slidein {
    from {
      opacity: 0;
      transform: translateX(10%);
    }

    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  animation: slidein 1s;
  ${(props) => props.theme.type.cb_sub_title};
  color: ${(props) => props.theme.colors.orange};
`;

const ItalicDiv = styled.div`
  ${(props) => props.theme.type.cb_body_italics};
  font-weight: bold;
  letter-spacing: 1px;
`;

const Travel = () => {
  return (
    <>
      <TravelBackground />
      <BlackOverlay />
      <TravelBlock>
        <PageTitle>Travel</PageTitle>
        <TravelItemsBlock>
          <ItalicDiv>
            All wedding weekend events will take place at the Mauna Kea Beach Hotel on the Big
            Island of Hawaii.
          </ItalicDiv>
        </TravelItemsBlock>
        <TravelItemsBlock>
          <TravelSubTitle>Accommodations</TravelSubTitle>
          <div>We hope that all guests are able to stay in our room block at the Mauna Kea.</div>
          <a
            href={'https://book.passkey.com/event/50794296/owner/49836322/home'}
            target={'_blank'}
            rel={'noreferrer'}
          >
            <BCPrimaryButton>Book Your Room</BCPrimaryButton>
          </a>
          <ItalicDiv>You can only book one room at a time.</ItalicDiv>
          <ItalicDiv>The hotel policy is a maximum of 3 guests per room.</ItalicDiv>
          <ItalicDiv>
            If you do not see the room type that you want or if you have any further questions,
            please reach out to Brooks & Claire!
          </ItalicDiv>
          <a href={'https://www.maunakearesort.com/'} target={'_blank'} rel={'noreferrer'}>
            <BCPrimaryButton>Mauna Kea Website</BCPrimaryButton>
          </a>
        </TravelItemsBlock>
        <TravelItemsBlock>
          <TravelSubTitle>Flight</TravelSubTitle>
          <div>
            The closest airport is the Kona International Airport (KOA), which is about a 35 minute
            drive to the hotel.
          </div>
          <div>Airport pickups are available through the hotel.</div>
        </TravelItemsBlock>
      </TravelBlock>
    </>
  );
};

export default Travel;
