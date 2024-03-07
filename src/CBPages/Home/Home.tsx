import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../../consts/vars';
import HomeImg from '../../images/CBImages/HomeImg.jpg';
import Container from '../../uiComponents/Container';

const HomeBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${HomeImg});
  background-position: top;
  width: 100%;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    background-position: center;
  }
`;

const HomeTitleBlock = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 16px;
  justify-content: center;
  padding-top: 20px;
  position: absolute;
  text-align: center;
  width: 100%;

  p {
    font-size: 16px;
    letter-spacing: 4px;
    margin: 0;
    text-shadow: 2px 2px 10px #95a1b7;
    text-transform: uppercase;
  }

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    padding-top: 0px;
  }
`;

const HomeName = styled.div`
  color: ${(props) => props.theme.colors.orange};
  ${(props) => props.theme.type.cb_title};
  font-size: 40px;
  line-height: 1.5;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    font-size: 50px;
  }
`;

const HomeName1 = styled(HomeName)`
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
  animation: slidein 1.5s;
`;

const HomeName2 = styled(HomeName)`
  @keyframes slidein2 {
    0% {
      opacity: 0;
      transform: translateX(10%);
    }

    30% {
      opacity: 0;
      transform: translateX(10%);
    }

    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  animation: slidein2 2s;
`;

const Home = () => {
  return (
    <>
      <HomeBackground />
      <HomeTitleBlock>
        <p>Please join us for the wedding of</p>
        <HomeName1>Claire Olmstead</HomeName1>
        <p style={{ marginTop: '-20px' }}>to</p>
        <HomeName2>Brooks Clark</HomeName2>
        <p style={{ marginTop: '-20px' }}>January 18, 2025</p>
      </HomeTitleBlock>
    </>
  );
};

export default Home;
