const twilioController = require('../controller/twilio');

const express = require("express");
const router = express.Router();
 
router.post("/send",twilioController.sendText); 

module.exports = router;