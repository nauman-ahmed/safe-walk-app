const userController = require('../controller/userController');
const authController =require('./../Authentication/authentication');

const express = require("express");
const router = express.Router();
 
router.post("/register",userController.register); 
router.post("/login",userController.login);

router.post("/updateArtist",authController.authUser,userController.updateArtist);


module.exports = router;