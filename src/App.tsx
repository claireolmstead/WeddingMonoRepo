import './App.css';

import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme } from './style/Theme';
import Switcher from './Switcher';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switcher />
      </Router>
    </ThemeProvider>
  );
}

export default App;
