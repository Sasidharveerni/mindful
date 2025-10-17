const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
const userRoutes = require('./routes/user');
const registerRoutes = require('./routes/registration')


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded())
app.use(userRoutes)
app.use(registerRoutes)

app.get('/', (req, res) => {
    try {
       res.send('Server is running') 
    } catch (error) {
        console.log('Error in server', error)
    }
})

app.listen(process.env.port, () => {
       mongoose.connect(process.env.mongo_url)
       .then(() => {
        console.log("Database is connected")
       }).catch((err) => {
        console.log("Error in connecting database: ", err)
       })
   
})