import styled from '@emotion/styled';
import React from 'react';

import { lodging } from '../../consts/accommodations';
import RegistryBackgroundImg from '../../images/wideshot/RegistryBackground.jpg';
import Container from '../../uiComponents/Container';
import LodgingListItemBlock from '../../uiComponents/LodgingListItemBlock';
import LodgingImages from './LodgingImages';

const LodgingTitleBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;

const LodgingTitle = styled.div`
  ${(props) => props.theme.type.page_title};
`;

const LodgingBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 40px 0;
  position: relative;
`;

const LodgingBlockContainer = styled(Container)`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
`;

const LodgingBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${RegistryBackgroundImg});
`;

const Lodging = () => {
  return (
    <>
      <LodgingBackground />
      <Container>
        <LodgingTitleBlock>
          <LodgingTitle>Pioneertown, CA</LodgingTitle>
          <div>Stay + Play</div>
        </LodgingTitleBlock>
      </Container>
      <LodgingBlock>
        <LodgingBlockContainer>
          <LodgingImages />
          <LodgingListItemBlock list={lodging} />
        </LodgingBlockContainer>
      </LodgingBlock>
    </>
  );
};

export default Lodging;
