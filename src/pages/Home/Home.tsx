import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { ScreenSizes } from '../../consts/vars';
import Container from '../../uiComponents/Container';
import PrimaryButton from '../../uiComponents/PrimaryButton';

const HomeBlock = styled.div`
  width: 100%;
`;

const HomeContent = styled(Container)`
  box-sizing: border-box;
  text-align: center;
  width: 100%;
`;

const HomeContentInner = styled.div`
  position: relative;
  text-align: center;
  transform: translateZ(-999px);
  width: 100%;
`;

const HomeDate = styled.div`
  color: ${(props) => props.theme.colors.tan};
  font-size: 14px;
  text-align: center;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    font-size: 16px;
  }

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    font-size: 20px;
  }
`;

const HomeInviteBlock = styled.div`
  margin: 50px 0;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    margin: 60px 0;
  }

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    margin: 70px 0;
  }
`;

const HomeJoinUs = styled.div`
  font-size: 20px;
  margin-bottom: 0;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    margin-bottom: 8px;
  }

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    margin-bottom: 16px;
  }
`;

const HomeTo = styled.div`
  ${(props) => props.theme.type.main_title};
  font-size: 20px;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    font-size: 28px;
  }

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    font-size: 38px;
  }
`;

const HomeNames = styled.h2`
  ${(props) => props.theme.type.main_title};
  color: ${(props) => props.theme.colors.red};
  font-weight: normal;
  line-height: 1;
  margin: 30px;
`;

const Home = () => {
  return (
    <HomeBlock>
      <HomeContent>
        {document.fonts && (
          <HomeContentInner>
            <HomeDate>OCTOBER 27, 2023 • RIMROCK RANCH • PIONEERTOWN, CA</HomeDate>
            <HomeInviteBlock>
              <HomeJoinUs>please join us for the wedding of</HomeJoinUs>
              <HomeNames>STERLING CLAIRE OLMSTEAD</HomeNames>
              <HomeTo>TO</HomeTo>
              <HomeNames>NICHOLAS MAX REYNOLDS</HomeNames>
            </HomeInviteBlock>
            <Link to={'/rsvp'}>
              <PrimaryButton>RSVP</PrimaryButton>
            </Link>
          </HomeContentInner>
        )}
      </HomeContent>
    </HomeBlock>
  );
};

export default Home;
