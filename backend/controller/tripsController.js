const mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs'),
    tripHistory = require('../models/tripHistory'),
    generator = require('generate-password');

exports.create = async (req, res, next) => {
    const { details, sourceAddress, destinationTrips} = req.body
    var history = new tripHistory({
        userId:details._id,
        sourceAddress: sourceAddress,
        destinations: destinationTrips
    });

    history.save()

    console.log("Successfully created Trip")
    return res.json("Successfully created");
}
