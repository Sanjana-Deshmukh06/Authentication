import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import CardPage from './components/CardPage';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LoginPage />} />

      </Routes>
    </Router>
  );
}

export default App;
