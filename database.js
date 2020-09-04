const mongoose = require('mongoose');
// let config = require('./config.js')

mongoose
    .connect('mongodb://localhost/tododb', {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((error) => {
        console.log(error.reason);
    });
