const app = require('./app')

//import mongoose and dotenv
require('dotenv').config({path:'.env'})
const mongoose = require('mongoose')

//DB connection
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true, useUnifiedTopology:true})
mongoose.Promise = global.Promise //Tell mogoose to use ES6 Promises
mongoose.connection.on('open', () => {
    console.log('Server connected to DB.')
})
mongoose.connection.on('error', (err) => {
    console.log(`DB connection error -> ${err.message}`)
})


const server = app.listen(process.env.PORT, () => {
    console.log(`Express running -> PORT ${server.address().port}`)
})