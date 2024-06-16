import React from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Navbar from './components/DaisyuiNavBar';
import SponsorPage from './containers/SponsorPage';
import MissionPage from './containers/MissionPage';


function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SponsorPage" element={<SponsorPage />} />
          <Route path="/MissionPage" element={<MissionPage />} />
          <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
