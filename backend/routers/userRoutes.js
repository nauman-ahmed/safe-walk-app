const userController = require('../controller/userController');
const authController =require('./../Authentication/authentication');

const express = require("express");
const router = express.Router();
 
router.post("/register",userController.register); 
router.post("/login",userController.login);

router.post("/getData",authController.authUser,userController.getData); 
router.post("/updateUser",authController.authUser,userController.updateUser);


module.exports = router;