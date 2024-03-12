import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Navbar from './components/DaisyuiNavBar';
import SponsorPage from './containers/SponsorPage';
import MissionPage from './containers/MissionPage';
import ContactPage from './containers/ContactPage';
/* add favicon by <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> inbetween head tag */

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
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
