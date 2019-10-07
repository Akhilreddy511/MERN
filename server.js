const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

require('dotenv').config()

var app = express();
var port = process.env.PORT || 5000;

//middlewares
app.use(cors());
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connection to mongodb atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('connected to MOngoDB')
})
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

