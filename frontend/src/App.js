import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import HomePage from './components/HomePage';
import VolunteerPage from './pages/VolunteerPage';
import Navbar from './components/NavBar';
import ProfileIcon from './components/ProfileIcon';
import Sidebar from './components/Sidebar';
import SafetyPrecautionsPage from './pages/SafetyPrecautionsPage';
import StartCampaignPage from './pages/StartCampaignPage';
import DonationsPage from './pages/DonationsPage';
import ContactInformationPage from './pages/ContactInformationPage';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage authentication state

    return (
        <Router>
            <MainRoutes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </Router>
    );
}

function MainRoutes({ isAuthenticated, setIsAuthenticated }) {
    const location = useLocation();

    return (
        <div className="app-container">
            {isAuthenticated && (
                <>
                    <Navbar />
                    <Sidebar />
                    {isAuthenticated && <ProfileIcon />} {/* Show ProfileIcon if logged in */}
                </>
            )}
            <div className="content-container">
                <Routes>
                    <Route
                        path="/signin"
                        element={<SignInPage setIsAuthenticated={setIsAuthenticated} />} // Pass the prop here
                    />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/signin" />} />
                    <Route path="/volunteer" element={isAuthenticated ? <VolunteerPage /> : <Navigate to="/signin" />} />
                    <Route path="/safety-precautions" element={isAuthenticated ? <SafetyPrecautionsPage /> : <Navigate to="/signin" />} />
                    <Route path="/start-campaign" element={isAuthenticated ? <StartCampaignPage /> : <Navigate to="/signin" />} />
                    <Route path="/donations" element={isAuthenticated ? <DonationsPage /> : <Navigate to="/signin" />} />
                    <Route path="/contact-information" element={isAuthenticated ? <ContactInformationPage /> : <Navigate to="/signin" />} />
                    <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/signin" />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
