const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

var app = express();
var port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('connected to MOngoDB')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

