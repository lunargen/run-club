import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Navbar from './components/DaisyuiNavBar';
import SponsorPage from './containers/SponsorPage';
import MissionPage from './containers/MissionPage';
import ContactPage from './containers/ContactPage';
import CoachingPage from './containers/CoachingPage';
import EventsPage from './containers/EventsPage';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="EventsPage" element={<EventsPage />} />
          <Route path="/SponsorPage" element={<SponsorPage />} />
          <Route path="/MissionPage" element={<MissionPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/CoachingPage" element={<CoachingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
