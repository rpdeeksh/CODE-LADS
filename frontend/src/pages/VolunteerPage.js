import React from 'react';
import Sidebar from '../components/Sidebar';
import VolunteerList from '../components/VolunteerList';
import './VolunteerPage.css'; // Add this for overall page styling

const VolunteerPage = () => {
    return (
        <div className="volunteer-page">
            <Sidebar />
            <VolunteerList />
        </div>
    );
};

export default VolunteerPage;
