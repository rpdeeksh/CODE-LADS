import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CampaignForm from './components/CampaignForm';
import './style.css'; // Import the CSS file

// Optional: Import your Home and NotFound components if you have them
// import Home from './components/Home';
// import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/campaigns" element={<CampaignForm />} />
        {/* <Route path="/" element={<Home />} />  */}
        {/* Ensure Home component exists */}
        {/* <Route path="*" element={<NotFound />} /> Ensure NotFound component exists */}
      </Routes>
    </Router>
  );
}

export default App;
