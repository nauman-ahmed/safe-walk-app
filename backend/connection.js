const mongoose = require('mongoose')


const url = 'mongodb://localhost:27017/SafeWalkDB?readPreference=primary&directConnection=true&ssl=false'

const connectDB = async () => {
    await mongoose.connect(url).
    then(async (x) => {
            console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        })
        .catch((err) => {
            console.error('Error connecting to mongo', err.reason)
        })  
}


module.exports = connectDB; 