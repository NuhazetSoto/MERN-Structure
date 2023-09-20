const express = require('express')
require ('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const  mongoose = require('mongoose')
const router = require('./routes/router')

// midleware

app.use(express.json())
app.use('/api', router)
app.use(cors())

// routes
app.get('/', (req,res) => {
    res.send('Welcome to my Api')
})

// Mongo db connection

mongoose.connect(process.env.MONGOOSE_URI,{dbName: process.env.DB_NAME})
        .then(() => console.log('Connected to MongoDB Atlas') )
        .catch((error) => console.error(error))

app.listen(port, () => console.log('Server listening on port', port))

