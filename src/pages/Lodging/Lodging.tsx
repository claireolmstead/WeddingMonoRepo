import styled from '@emotion/styled';
import React, { useContext } from 'react';

import { lodging } from '../../consts/accommodations';
import { ScreenContext } from '../../context/ScreenContext';
import RegistryBackgroundImg from '../../images/RegistryBackground.jpg';
import Container from '../../uiComponents/Container';
import LodgingListItemBlock from '../../uiComponents/LodgingListItemBlock';
import LodgingImages from './LodgingImages';

const LodgingTitleBlock = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.green};
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const LodgingTitle = styled.div`
  ${(props) => props.theme.type.sub_title};
  margin-top: 20px;
  text-align: center;
`;

const LodgingBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 40px 0;
  position: relative;
`;

const LodgingBlockContainer = styled(Container)<{ isMobile?: boolean }>`
  display: grid;
  gap: 30px;
  grid-template-columns: ${(props) => (props.isMobile ? `1fr` : `1fr 1fr`)};
`;

const LodgingBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${RegistryBackgroundImg});
`;

const Lodging = () => {
  const { isMobile } = useContext(ScreenContext);

  return (
    <>
      <LodgingBackground />
      <Container>
        <LodgingTitleBlock>
          <LodgingTitle>Pioneertown, CA</LodgingTitle>
          <div>
            <b>Stay + Play</b>
          </div>
        </LodgingTitleBlock>
      </Container>
      <LodgingBlock>
        <LodgingBlockContainer isMobile={isMobile}>
          <LodgingImages />
          <LodgingListItemBlock list={lodging} />
        </LodgingBlockContainer>
      </LodgingBlock>
    </>
  );
};

export default Lodging;
