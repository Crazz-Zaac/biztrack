const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');


// connect to the database
connectToDb();

// This will be replaced by the domain in the production 
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;
