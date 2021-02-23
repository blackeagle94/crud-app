const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

let corsOptions = {
  origin: 'http://localhost:3000',
  'Access-Control-Allow-Origin':'*',
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

 
  
//json parser
app.use(express.json())

//import routes
const postRoter = require('./routes/posts.route')

//routes
app.use('/', postRoter)

app.get('/', (req, res) => {
    res.send('Server Running')
})

module.exports = app


