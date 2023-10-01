var express = require('express');
var userRouter = require('./userRoutes');
var tripsRouter = require('./tripsRoutes');
 

const rootRouter = express.Router()

rootRouter.use('/user',userRouter);
rootRouter.use('/trips',tripsRouter);


module.exports = rootRouter;

 