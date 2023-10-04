const mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs'),
    Users = require('../models/userModel'),
    generator = require('generate-password');

    exports.register = async (req, res, next) => {

        const user = await Users.findOne({
            email: req.body.email
        });


        if(user !== null){
            console.log('Artist Already Exist')
            return res.status(200).json('Artist Already Exist');
        }else{
            registerArtist(req,res,next)
        }
    }

    
registerArtist = async (req, res, next) => {

    try {
        
        const salt = await bcrypt.genSalt(10);
        req.body.hash_password = bcrypt.hashSync(req.body.password, salt);
        var user = new Users(req.body);
        user.save();
    
        console.log("Successfully created")
        return res.json("Successfully created");
    } catch (error) {
        console.log("somgthing is wrong")
        return res.json("somgthing is wrong");
    }

}


exports.login = async (req, res, next) => {
    const {
        email,
        password
    } = req.body;   
    
    const user = await Users.findOne({
        email: email
    });

    if(user !== null){
        console.log("login",user)
        const compare = bcrypt.compareSync(password, user.hash_password)
        if(compare){
            console.log("Successfully Login")
            return res.json({
                token: jwt.sign({
                    email: user.email,
                    firstname: user.firstname,
                    _id: user._id
                }, process.env.JWT_TOKEN, {
                    expiresIn: process.env.JWT_EXPIRE_IN
                }),
                message:"Successfully Login"
            });
        }else{
            console.log('Authentication failed. Invalid user or password.')
            return res.status(200).json({message:'Authentication failed. Invalid user or password.'});
        }
    }else{
        console.log('Unauthorized User')
        return res.status(200).json({messgae:'Unauthorized User'});
    }

}

exports.updateUser = async function (req, res, next) {


    try {
        const user = await Users.find({
            email: req.body.email
        });
        user[0].firstName = req.body.firstName;
        user[0].lastName = req.body.lastName;
        user[0].email = req.body.email;
        user[0].address = req.body.address;
        user[0].bio = req.body.bio;
        user[0].interests = req.body.interests;
        const salt = await bcrypt.genSalt(10);
        user[0].hash_password = bcrypt.hashSync(req.body.password, salt);
    
       const response =  await user[0].save();
        
        return res.json(response);
    } catch (err) {
        console.log("ERROR",err.message)
        return res.json("Error");
    }

};

exports.getData = async (req, res, next) => {

    const user = await Users.findOne({
        _id: req.body.details._id
    });

    if(user !== null){
        return res.status(200).json(user);
    }else{
        return res.json(err.message);
    }
}