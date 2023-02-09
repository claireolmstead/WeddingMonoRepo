import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Authenticate from "./pages/Authenticate/Authenticate";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Authenticate />} />
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
  );
}

export default App;
