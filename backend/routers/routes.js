var express = require('express');
var userRouter = require('./userRoutes');
var tripsRouter = require('./tripsRoutes');
var twilio = require("./twilioRoute")

const rootRouter = express.Router()

rootRouter.use('/user',userRouter);
rootRouter.use('/trips',tripsRouter);
rootRouter.use('/text',twilio);


module.exports = rootRouter;

 