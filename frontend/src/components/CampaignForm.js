import React, { useState } from 'react';

const CampaignForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    contactNo: '',
    description: '',
    address: '',
    city: '',
    keywords: '',
    specificPersons: '',
    additionalDetails: ''
  });

  const [isPersonalDetailsOpen, setPersonalDetailsOpen] = useState(true);
  const [isCampaignDetailsOpen, setCampaignDetailsOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/campaigns`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Campaign submitted successfully!');
      } else {
        alert('Failed to submit the campaign.');
      }
    } catch (error) {
      console.error('Error submitting the campaign:', error);
      alert('Failed to submit the campaign.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Create a new campaign</h2>
      <div className="accordion-section">
        <button type="button" onClick={() => setPersonalDetailsOpen(!isPersonalDetailsOpen)}>
          Personal details
        </button>
        {isPersonalDetailsOpen && (
          <div className="accordion-content">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} />
            <input type="text" name="contactNo" placeholder="Contact no." value={formData.contactNo} onChange={handleChange} />
          </div>
        )}
      </div>

      <div className="accordion-section">
        <button type="button" onClick={() => setCampaignDetailsOpen(!isCampaignDetailsOpen)}>
          Campaign details
        </button>
        {isCampaignDetailsOpen && (
          <div className="accordion-content">
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
            <input type="text" name="organization" placeholder="*Organization" value={formData.organization} onChange={handleChange} />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            <input type="text" name="keywords" placeholder="Keywords" value={formData.keywords} onChange={handleChange} />
            <input type="text" name="specificPersons" placeholder="*Specific persons looking for" value={formData.specificPersons} onChange={handleChange} />
            <textarea name="additionalDetails" placeholder="Additional details" value={formData.additionalDetails} onChange={handleChange} />
          </div>
        )}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default CampaignForm;
