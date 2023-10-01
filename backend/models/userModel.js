const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        lowercase: true,
        unique:true
    },
    hash_password: {
        type: String,
        required:true
    },
    address: {
        type: String,
    },
})


module.exports = mongoose.model('Users', schema)
