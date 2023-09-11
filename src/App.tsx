import './App.css';

import { ThemeProvider } from '@emotion/react';
import { getAnalytics } from '@firebase/analytics';
// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import CBSwitcher from './CBSwitcher';
import CurInvitesContextProvider from './context/CurInvitesContext';
import ScreenContextProvider from './context/ScreenContext';
// import SNSwitcher from './SNSwitcher';
import { theme } from './style/Theme';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCKju8GZYhx49Yj6sloNmOr2kSBs5mSmKM',
  authDomain: 'reynoldsattheranch.firebaseapp.com',
  projectId: 'reynoldsattheranch',
  storageBucket: 'reynoldsattheranch.appspot.com',
  messagingSenderId: '272827409985',
  appId: '1:272827409985:web:344d74074b7dad32c908c0',
  measurementId: 'G-G9Q8QPYZN6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

function App() {
  return (
    <ScreenContextProvider>
      <CurInvitesContextProvider>
        <ThemeProvider theme={theme}>
          <ParallaxProvider>
            {/*<Router>{env.IS_CB ? <CBSwitcher /> : <SNSwitcher />}</Router>*/}
            <Router>
              <CBSwitcher />
            </Router>
          </ParallaxProvider>
        </ThemeProvider>
      </CurInvitesContextProvider>
    </ScreenContextProvider>
  );
}

export default App;
