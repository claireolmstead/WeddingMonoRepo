import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, ImageList, ImageListItem } from '@mui/material';
import React from 'react';

import { ScreenSizes } from '../consts/vars';
import img_0 from '../images/WelcomeParty/img_0.png';
import img_1 from '../images/WelcomeParty/img_1.png';
import img_2 from '../images/WelcomeParty/img_2.png';
import img_3 from '../images/WelcomeParty/img_3.png';
import img_4 from '../images/WelcomeParty/img_4.png';
import img_5 from '../images/WelcomeParty/img_5.png';
import img_6 from '../images/WelcomeParty/img_6.png';
import img_7 from '../images/WelcomeParty/img_7.png';
import img_8 from '../images/WelcomeParty/img_8.png';
import { Event } from '../types';

const ModalInner = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  justify-content: center;
  overflow: scroll;
  padding: 16px;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    padding: 30px 50px;
  }
`;

const EventInfoItemsModalImage = styled.img`
  height: 164px;
  object-fit: cover;
  width: 164px;
`;

const ExitIcon = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;

interface EventInfoItemsModalProps {
  event: Event;
  isOpen: boolean;
  handleToggleDrawer: () => void;
}

const EventInfoItemsModal = ({ event, isOpen, handleToggleDrawer }: EventInfoItemsModalProps) => {
  const images = [img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];
  return (
    <Drawer open={isOpen} onClose={handleToggleDrawer} anchor={'bottom'}>
      <ModalInner>
        <ExitIcon onClick={handleToggleDrawer} />
        <div>{event.title}</div>
        <div>WHAT TO WEAR</div>
        <div>{event.whatToWear}</div>
        <ImageList sx={{ width: 500, height: 500 }} cols={3} rowHeight={164}>
          {images.map((image) => (
            <ImageListItem key={image}>
              <EventInfoItemsModalImage src={image} alt={image} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        <div>WHAT TO KNOW</div>
        <div>{event.whatToKnow}</div>
      </ModalInner>
    </Drawer>
  );
};

export default EventInfoItemsModal;
