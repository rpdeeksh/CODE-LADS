import React from 'react';
import Sidebar from './Sidebar';
import './HomePage.css'; // Ensure you have a CSS file for styling

const HomePage = () => {
    return (
        <div className="homepage">
            <Sidebar />
            <div className="main-content">
                <h1>Welcome to V-Help</h1>
                {/* You can add more content here as needed */}
            </div>
        </div>
    );
};

export default HomePage;
