import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { ScreenSizes } from '../../consts/vars';
import HomeBackgroundImg from '../../images/wideshot/HomeBackground.jpg';
import Container from '../../uiComponents/Container';

const HomeBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${HomeBackgroundImg});
  background-position: top;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    background-position: center;
  }
`;

const HomeContent = styled(Container)`
  box-sizing: border-box;
  position: relative;
  text-align: center;
  width: 100%;
`;

const HomeDate = styled.div`
  color: ${(props) => props.theme.colors.orange};
  font-size: 14px;
  font-weight: bold;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    font-size: 16px;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
  }

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    font-size: 20px;
  }
`;

const HomeInviteBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 50px 0;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    margin: 40px 0;
  }

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    margin: 40px 0;
  }
`;

const HomeNames = styled.div`
  ${(props) => props.theme.type.main_title};
  color: ${(props) => props.theme.colors.orange};
  line-height: 1;
`;

const HomeRSVP = styled(Link)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.pink};
  border-radius: 50px 0 0 50px;
  display: flex;
  filter: drop-shadow(-5px 5px 5px rgba(0, 0, 0, 0.2));
  font-weight: bold;
  height: 60px;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 400px;
  width: 150px;
`;

const Home = () => {
  return (
    <>
      <HomeBackground />
      <HomeContent>
        <HomeInviteBlock>
          <HomeNames>STERLING & NICK</HomeNames>
          <HomeDate>OCTOBER 27, 2023 | PIONEERTOWN, CA</HomeDate>
        </HomeInviteBlock>
        <HomeRSVP to={'/rsvp'}>RSVP</HomeRSVP>
      </HomeContent>
    </>
  );
};

export default Home;
