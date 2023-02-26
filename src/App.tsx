import './App.css';

import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ScreenContextProvider from './context/ScreenContext';
import { theme } from './style/Theme';
import Switcher from './Switcher';

function App() {
  return (
    <ScreenContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switcher />
        </Router>
      </ThemeProvider>
    </ScreenContextProvider>
  );
}

export default App;
