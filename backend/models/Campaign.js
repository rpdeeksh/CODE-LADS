const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  organization: { type: String, required: true },
  contactNo: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  keywords: { type: String, required: true },
  specificPersons: { type: String, required: false },
  additionalDetails: { type: String, required: false },
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
