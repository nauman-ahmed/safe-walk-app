const mongoose = require('mongoose')

// const url = 'mongodb://localhost:27017/SafeWalkDB?readPreference=primary&directConnection=true&ssl=false'
// const url = "mongodb+srv://nauman:niksonboy123@cluster0.ogjnj.mongodb.net/SafeWalkDB"
// const url = "mongodb+srv://jonmrosenblum:8SFmebFjrakGoovX@cluster0.c3srfhx.mongodb.net/SafeWalkDB/?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(process.env.url).
    then(async (x) => {
            console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        })
        .catch((err) => {
            console.error('Error connecting to mongo', err.reason)
        })  
}


module.exports = connectDB; 