import styled from '@emotion/styled';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { accommodations } from '../../consts/accommodations';
import { ScreenSizes } from '../../consts/vars';
import AccommodationsImg from '../../images/Accommodations.png';
import Container from '../../uiComponents/Container';
import ListItemBlock from '../../uiComponents/ListItemBlock';

const AccommodationsBackground = styled.div`
  background: url(${AccommodationsImg}) rgba(0, 0, 0, 0.6) center center;
  background-blend-mode: multiply;
  background-size: cover;
  height: 100vh;
  position: absolute;
  width: 100vw;
`;

const AccommodationsMoreInfo = styled(Container)`
  color: ${(props) => props.theme.colors.red};
  position: relative;
  text-align: center;
  top: 120px;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    top: 50px;
  }
`;

const Accommodations = () => {
  return (
    <div>
      <Parallax speed={0}>
        <AccommodationsBackground />
      </Parallax>
      <Parallax speed={-30}>
        <ListItemBlock list={accommodations} />
        <AccommodationsMoreInfo>
          PLEASE BOOK ACCOMMODATION AS SOON AS POSSIBLE AS THERE IS{' '}
          <b>NO GUARANTEE OF AVAILABILITY</b>.
        </AccommodationsMoreInfo>
      </Parallax>
    </div>
  );
};

export default Accommodations;
