import styled from '@emotion/styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Keyboard, Navigation, Scrollbar, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ScreenSizes } from '../../consts/vars';
import HomeBackgroundImg from '../../images/HomeBackgroundImg.jpg';
import img1 from '../../images/Us/img1.jpg';
import img2 from '../../images/Us/img2.jpg';
import img3 from '../../images/Us/img3.jpg';
import img4 from '../../images/Us/img4.jpg';
import img5 from '../../images/Us/img5.jpg';
import img6 from '../../images/Us/img6.jpg';
import img7 from '../../images/Us/img7.jpg';
import img8 from '../../images/Us/img8.jpg';
import img9 from '../../images/Us/img9.jpg';
import img10 from '../../images/Us/img10.jpg';
import img11 from '../../images/Us/img11.jpg';
import Container from '../../uiComponents/Container';

const HomeBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${HomeBackgroundImg});
  background-position: top;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    background-position: center;
  }
`;

const HomeContent = styled(Container)`
  box-sizing: border-box;
  position: relative;
  text-align: center;
  width: 100%;
`;

const HomeDate = styled.div`
  color: ${(props) => props.theme.colors.orange};
  font-size: 14px;
  font-weight: bold;

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    font-size: 16px;
  }
`;

const HomeInviteBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 50px 0;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    margin: 40px 0;
  }

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    margin: 40px 0;
  }
`;

const HomeNames = styled.div`
  ${(props) => props.theme.type.main_title};
  color: ${(props) => props.theme.colors.orange};
  line-height: 1;
`;

const HomeRSVP = styled(Link)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.pink};
  border-radius: 50px 0 0 50px;
  display: flex;
  filter: drop-shadow(-5px 5px 5px rgba(0, 0, 0, 0.2));
  font-weight: bold;
  height: 60px;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 400px;
  width: 150px;

  &:hover {
    background-color: ${(props) => props.theme.colors.pinkHover};
    text-decoration: none;
  }
`;

const HomeSwiper = styled(Swiper)`
  background-color: ${(props) => props.theme.colors.clearWhite};
  height: 400px;
  padding: 30px 0;
  position: absolute;
  top: 100vh;
  width: 100vw;
`;

const HomeImage = styled.img`
  filter: grayscale(100%);
  height: 400px;
  object-fit: cover;
  overflow: hidden;
  transition: filter 0.4s;
  width: 400px;

  &:hover {
    filter: grayscale(0%);
  }
`;

const HomeDownIcon = styled(ExpandMoreIcon)`
  bottom: 0;
  cursor: pointer;
  height: 60px;
  left: 20px;
  position: fixed;
  transition: all 0.3s;
  width: 60px;

  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`;

const Home = () => {
  const images = [img1, img10, img2, img3, img4, img5, img6, img7, img8, img9, img11];

  return (
    <>
      <HomeBackground />
      <HomeContent>
        <HomeInviteBlock>
          <HomeNames>STERLING & NICK</HomeNames>
          <HomeDate>OCTOBER 27, 2023 | PIONEERTOWN, CA</HomeDate>
        </HomeInviteBlock>
        <HomeRSVP to={'/rsvp'}>RSVP</HomeRSVP>
        <HomeDownIcon
          onClick={() =>
            window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' })
          }
        />
      </HomeContent>
      <HomeSwiper
        className={'.homeSwiper'}
        modules={[Autoplay, Keyboard, Scrollbar, Zoom, Navigation]}
        navigation={true}
        autoplay={true}
        keyboard={true}
        scrollbar={true}
        loop={true}
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
        {images.map((image) => (
          <SwiperSlide key={image}>
            <HomeImage src={image} alt={image} loading="lazy" />
          </SwiperSlide>
        ))}
      </HomeSwiper>
    </>
  );
};

export default Home;
