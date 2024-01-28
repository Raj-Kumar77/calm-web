const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')

const app = express()
connectDB()

// middleware 
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('welcome')
})

// routes 
app.use("/api/user", userRoutes);

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server listening at port ${port}`)
})