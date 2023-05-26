import styled from '@emotion/styled';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { lodging } from '../../consts/accommodations';
import Landscape1 from '../../images/Pioneertown/Landscape1.jpg';
import Landscape2 from '../../images/Pioneertown/Landscape2.jpg';
import Landscape3 from '../../images/Pioneertown/Landscape3.jpg';
import HomeImage from '../../images/wideshot/HomeBackground.jpg';
import Container from '../../uiComponents/Container';
import ListItemBlock from '../../uiComponents/ListItemBlock';

const LodgingTitleBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const LodgingTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
`;

const LodgingBlock = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
`;

const LodgingParallaxImages = styled.div`
  align-items: end;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LodgingLandscape = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  background-size: cover;
  height: 250px;
  width: 400px;
`;

const LodgingListItemBlock = styled(ListItemBlock)`
  color: ${(props) => props.theme.colors.black};
  max-width: 500px;
  a {
    color: ${(props) => props.theme.colors.black};
  }
`;

const HomeImg = styled.div`
  background: url(${HomeImage}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;
`;

const LodgingItemBlock = styled(Parallax)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  height: 100vh;
  justify-content: center;
  opacity: 0.9;
`;

const Lodging = () => {
  return (
    <>
      <HomeImg />
      <LodgingItemBlock speed={-10}>
        <Container>
          <LodgingTitleBlock>
            <LodgingTitle>Pioneertown, CA</LodgingTitle>
            <div>Stay + Play</div>
          </LodgingTitleBlock>
          <LodgingBlock>
            <LodgingParallaxImages>
              <Parallax>
                <LodgingLandscape url={Landscape2} />
              </Parallax>
              <Parallax>
                <LodgingLandscape url={Landscape3} />
              </Parallax>
            </LodgingParallaxImages>
            <Parallax speed={0}>
              <LodgingListItemBlock list={lodging} />
            </Parallax>
          </LodgingBlock>
        </Container>
      </LodgingItemBlock>
    </>
  );
};

export default Lodging;
