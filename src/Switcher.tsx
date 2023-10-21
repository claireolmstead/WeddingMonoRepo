import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import 'swiper/css/navigation';

import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Header from './features/Header';
import Admin from './pages/Admin/Admin';
import Authenticate from './pages/Authenticate/Authenticate';
import Home from './pages/Home/Home';
import Lodging from './pages/Lodging/Lodging';
import Registry from './pages/Registry/Registry';
import RSVP from './pages/RSVP/RSVP';
import Schedule from './pages/Schedule/Schedule';
import NotificationModal from './uiComponents/NotificationModal/NotificationModal';

const AppBody = styled.div`
  color: ${(props) => props.theme.colors.white};
  min-height: 100vh;
`;

const Switcher = () => {
  const navigate = useNavigate();
  const auth = window.localStorage.getItem('isAuthenticated');
  const isAuth: boolean = auth && JSON.parse(auth);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isAuth ?? false);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    if (window.location.pathname !== '/' && !isAuthenticated) {
      navigate('/');
    }
    if (window.location.pathname === '/' && isAuthenticated) {
      navigate('/home');
    }
  }, [auth, isAuthenticated, navigate]);

  useEffect(() => {
    window.localStorage.setItem('isAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);

  return (
    <AppBody>
      {isAuthenticated && <Header />}
      <NotificationModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route
          path="/"
          element={<Authenticate setAuthenticated={() => setIsAuthenticated(true)} />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/rsvp" element={<RSVP setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/lodging" element={<Lodging />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AppBody>
  );
};

export default Switcher;
