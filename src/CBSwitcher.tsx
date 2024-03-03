import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import 'swiper/css/navigation';

import styled from '@emotion/styled';
import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { Route, Routes } from 'react-router-dom';

import Header from './CBFeatures/Header';
import Events from './CBPages/Events/Events';
import Home from './CBPages/Home/Home';
import Registry from './CBPages/Registry/Registry';
import RSVP from './CBPages/RSVP/RSVP';
import Todo from './CBPages/Todo/Todo';
import Travel from './CBPages/Travel/Travel';
import Us from './CBPages/Us/Us';
import Admin from './SNPages/Admin/Admin';

const AppBody = styled.div`
  color: ${(props) => props.theme.colors.white};
  min-height: 100vh;
  width: 100vw;
`;

const CBSwitcher = () => {
  return (
    <AppBody>
      {/*<AnimatedCursor*/}
      {/*  innerSize={8}*/}
      {/*  outerSize={35}*/}
      {/*  innerScale={1}*/}
      {/*  outerScale={2}*/}
      {/*  outerAlpha={0}*/}
      {/*  // hasBlendMode={true}*/}
      {/*  innerStyle={{*/}
      {/*    backgroundColor: 'white',*/}
      {/*  }}*/}
      {/*  outerStyle={{*/}
      {/*    border: '3px solid white',*/}
      {/*    mixBlendMode: 'exclusion',*/}
      {/*  }}*/}
      {/*  clickables={[*/}
      {/*    'a',*/}
      {/*    'input[type="text"]',*/}
      {/*    'input[type="email"]',*/}
      {/*    'input[type="number"]',*/}
      {/*    'input[type="submit"]',*/}
      {/*    'input[type="image"]',*/}
      {/*    'select',*/}
      {/*    'textarea',*/}
      {/*    'button',*/}
      {/*    '.btn',*/}
      {/*  ]}*/}
      {/*/>*/}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Travel" element={<Travel />} />
        {/*<Route path="/registry" element={<Registry />} />*/}
        <Route path="/todo" element={<Todo />} />
        <Route path="/us" element={<Us />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AppBody>
  );
};

export default CBSwitcher;
