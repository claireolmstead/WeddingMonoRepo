import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer } from '@mui/material';
import React from 'react';
import { Autoplay, Keyboard, Navigation, Scrollbar, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ScreenSizes } from '../consts/vars';
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
  max-height: 300px;
  max-width: 300px;
`;

const ExitIcon = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const DrawerTitle = styled.div`
  ${(props) => props.theme.type.sub_title};
  color: ${(props) => props.theme.colors.orange};
`;

const DrawerSubTitle = styled.div`
  ${(props) => props.theme.type.sub_page_title};
  color: ${(props) => props.theme.colors.lightBlue};
`;

interface EventInfoItemsModalProps {
  event: Event;
  isOpen: boolean;
  handleToggleDrawer: () => void;
}

const EventInfoItemsDrawer = ({ event, isOpen, handleToggleDrawer }: EventInfoItemsModalProps) => {
  return (
    <Drawer open={isOpen} onClose={handleToggleDrawer} anchor={'bottom'}>
      <ModalInner>
        <ExitIcon onClick={handleToggleDrawer} />
        <DrawerTitle>{event.title}</DrawerTitle>
        <DrawerSubTitle>WHAT TO WEAR</DrawerSubTitle>
        <div>{event.whatToWear}</div>
        {event?.images && (
          <Swiper
            modules={[Autoplay, Keyboard, Scrollbar, Zoom, Navigation]}
            navigation={true}
            autoplay={true}
            keyboard={true}
            scrollbar={true}
            loop={true}
            style={{ width: '75vw', maxWidth: '1000px' }}
            spaceBetween={0}
            slidesPerView={5}
          >
            {event.images.map((image) => (
              <SwiperSlide key={image}>
                <EventInfoItemsModalImage src={image} alt={image} loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <DrawerSubTitle>WHAT TO KNOW</DrawerSubTitle>
        <div>{event.whatToKnow}</div>
      </ModalInner>
    </Drawer>
  );
};

export default EventInfoItemsDrawer;
