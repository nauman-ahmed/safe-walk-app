const tripsController = require('../controller/tripsController');
const authController =require('../Authentication/authentication');

const express = require("express");
const router = express.Router();
 
router.post("/create",authController.authUser,tripsController.create); 
router.post("/getUserTrip",authController.authUser,tripsController.getAll);


module.exports = router;