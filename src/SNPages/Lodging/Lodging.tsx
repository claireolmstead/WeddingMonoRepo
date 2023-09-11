import styled from '@emotion/styled';
import React, { useContext } from 'react';

import { lodging } from '../../consts/accommodations';
import { ScreenContext } from '../../context/ScreenContext';
import RegistryBackgroundImg from '../../images/NSImages/RegistryBackground.jpg';
import Container from '../../uiComponents/Container';
import LodgingListItemBlock from '../../uiComponents/LodgingListItemBlock';
import LodgingImages from './LodgingImages';

const LodgingTitle = styled.div`
  ${(props) => props.theme.type.page_title};
  color: ${(props) => props.theme.colors.orange};
  margin: 20px 0;
  text-align: center;
`;

const LodgingBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 40px 0;
  position: relative;
`;

const LodgingBlockContainer = styled(Container)<{ isMobile?: boolean }>`
  align-items: start;
  display: grid;
  gap: 30px;
  grid-template-columns: ${(props) => (props.isMobile ? `1fr` : `1fr 1fr`)};
`;

const LodgingBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${RegistryBackgroundImg});
`;

const LodgingItem1 = styled.div<{ isMobile?: boolean }>`
  ${(props) => props.isMobile && `grid-row: 2`};
`;

const Lodging = () => {
  const { isMobile } = useContext(ScreenContext);

  return (
    <>
      <LodgingBackground />
      <Container>
        <LodgingTitle>Pioneertown, CA</LodgingTitle>
      </Container>
      <LodgingBlock>
        <LodgingBlockContainer isMobile={isMobile}>
          <LodgingItem1 isMobile={isMobile}>
            <LodgingImages />
          </LodgingItem1>
          <LodgingListItemBlock list={lodging} />
        </LodgingBlockContainer>
      </LodgingBlock>
    </>
  );
};

export default Lodging;
