import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Form from '../components/Form';

const Campaign = () => {
  return (
    <div className="campaign-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
};

export default Campaign;
