import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Navigation from './features/Navigation';
import Accommodations from './pages/Accommodations/Accommodations';
import Authenticate from './pages/Authenticate/Authenticate';
import Home from './pages/Home/Home';
import RSVP from './pages/RSVP/RSVP';
import Schedule from './pages/Schedule/Schedule';
import Us from './pages/Us/Us';

const AppBody = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  min-height: 100vh;
  padding: 30px;

  a,
  a:visited {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Switcher = () => {
  const navigate = useNavigate();
  const auth = window.localStorage.getItem('isAuthenticated');
  const isAuth = auth && JSON.parse(auth);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isAuth);

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
      {isAuthenticated && <Navigation />}
      <Routes>
        <Route
          path="/"
          element={<Authenticate setAuthenticated={() => setIsAuthenticated(true)} />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/us" element={<Us />} />
      </Routes>
    </AppBody>
  );
};

export default Switcher;
