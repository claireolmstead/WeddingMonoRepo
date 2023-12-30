import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer } from '@mui/material';
import React, { useContext } from 'react';
import { Autoplay, Keyboard, Navigation, Scrollbar, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ScreenSizes } from '../consts/vars';
import { ScreenContext } from '../context/ScreenContext';
import { Event } from '../types';

const ModalInner = styled.div<{ isMobile: boolean }>`
  align-items: center;
  align-self: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: ${(props) => (props.isMobile ? '10px' : '20px')};
  height: 100vh;
  justify-content: center;
  max-width: 1200px;
  padding: 16px;

  .title {
    color: ${(props) => props.theme.colors.pink};
    ${(props) => props.theme.type.sn_sub_page_title};
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
  color: ${(props) => props.theme.colors.green};
  cursor: pointer;
  height: 1.5em;
  position: absolute;
  right: 20px;
  top: 20px;
  transition: all 0.3s;
  width: 1.5em;

  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;

const DrawerTitle = styled.div`
  ${(props) => props.theme.type.sn_sub_title};
  color: ${(props) => props.theme.colors.orange};
  text-align: center;
`;

const DrawerSubTitle = styled.div`
  ${(props) => props.theme.type.sn_sub_page_title};
  color: ${(props) => props.theme.colors.lightBlue};
`;

const DrawerTextBlock = styled.div`
  align-self: flex-start;
`;

interface EventInfoItemsModalProps {
  event: Event;
  isOpen: boolean;
  handleCloseDrawer: () => void;
}

const EventInfoItemsDrawer = ({ event, isOpen, handleCloseDrawer }: EventInfoItemsModalProps) => {
  const { isMobile } = useContext(ScreenContext);

  return (
    <Drawer open={isOpen} onClose={handleCloseDrawer} anchor={'bottom'}>
      <ModalInner isMobile={isMobile}>
        <ExitIcon onClick={handleCloseDrawer} />
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
            slidesPerView={1}
            breakpoints={{
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 100,
              },
            }}
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
