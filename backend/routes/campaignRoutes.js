const express = require('express');
const Campaign = require('../models/Campaign');

const router = express.Router();

// POST route to create a new campaign
router.post('/', async (req, res) => {
  try {
    const newCampaign = new Campaign(req.body);
    await newCampaign.save();
    res.status(200).send('Campaign submitted successfully!');
  } catch (error) {
    res.status(500).send('Error submitting campaign');
  }
});

module.exports = router;
