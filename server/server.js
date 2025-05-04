require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const PORT = process.env.port || 7000
const app = express()
connectDB()
app.use(cors(corsOptions))
app.use(express.json())
//routes
app.use('/auth',require('./routes/authRoute'))
app.use('/user',require('./routes/userRoute'))
app.use('/apartment',require('./routes/apartmentRoute'))
app.use('/myApartment',require('./routes/myApartmentRoute'))
app.use('/uploads', express.static('uploads'));
mongoose.connection.once('open', () => {
    console.log('connected to mongoDB')
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
})
mongoose.connection.on('error', err => {
    console.log(err)
})
