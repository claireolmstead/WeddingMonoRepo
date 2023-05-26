import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Header from './features/Header';
import Admin from './pages/Admin/Admin';
import Authenticate from './pages/Authenticate/Authenticate';
import Home from './pages/Home/Home';
import Lodging from './pages/Lodging/Lodging';
import RSVP from './pages/RSVP/RSVP';
import Schedule from './pages/Schedule/Schedule';

const AppBody = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  min-height: 100vh;
`;

const Switcher = () => {
  const navigate = useNavigate();
  const auth = window.localStorage.getItem('isAuthenticated');
  const isAuth: boolean = auth && JSON.parse(auth);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isAuth ?? false);

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
      <Routes>
        <Route
          path="/"
          element={<Authenticate setAuthenticated={() => setIsAuthenticated(true)} />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/lodging" element={<Lodging />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AppBody>
  );
};

export default Switcher;
