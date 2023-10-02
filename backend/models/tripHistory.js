const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    sourceAddress:{
        type:String,
    },
    destinations:[{
        type:String,
    }],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
        // unique: true
    },
})


module.exports = mongoose.model('Trips', schema)
