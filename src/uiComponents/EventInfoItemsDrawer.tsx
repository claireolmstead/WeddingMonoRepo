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
  align-self: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 20px;
  height: 100vh;
  justify-content: center;
  max-width: 1200px;
  padding: 16px;

  .title {
    color: ${(props) => props.theme.colors.pink};
    ${(props) => props.theme.type.sub_page_title};
    font-size: 18px;
  }

  .subtitle {
    color: ${(props) => props.theme.colors.green};
    font-size: 18px;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    padding: 30px 50px;
  }
`;

const EventInfoItemsModalImage = styled.img`
  height: 300px;
  object-fit: cover;
  width: 300px;
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

const DrawerTextBlock = styled.div`
  align-self: flex-start;
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
        <DrawerTextBlock>{event.whatToWear}</DrawerTextBlock>
        {event?.images && (
          <Swiper
            modules={[Autoplay, Keyboard, Scrollbar, Zoom, Navigation]}
            navigation={true}
            autoplay={true}
            keyboard={true}
            scrollbar={true}
            loop={true}
            style={{ width: '75vw', maxWidth: '1200px' }}
            spaceBetween={0}
            slidesPerView={4}
          >
            {event.images.map((image) => (
              <SwiperSlide key={image}>
                <EventInfoItemsModalImage src={image} alt={image} loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <DrawerSubTitle>WHAT TO KNOW</DrawerSubTitle>
        <DrawerTextBlock>{event.whatToKnow}</DrawerTextBlock>
      </ModalInner>
    </Drawer>
  );
};

export default EventInfoItemsDrawer;
