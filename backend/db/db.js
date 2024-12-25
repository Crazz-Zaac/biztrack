const mongoose = require('mongoose');

function connectToDb() {
    // The uri is the path to the database that is set up in the .env file
    const uri = process.env.DB_CONNECT;
    mongoose.connect(uri)
        .then(() => {
            console.log('Connected to the database successfully');
        })
        .catch((error) => {
            console.log('Error connecting to the database');
            console.log(error);
        });
}

module.exports = connectToDb;