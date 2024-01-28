const mongoose = require('mongoose')

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        if(conn){
            console.log('db connected successfully')
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB