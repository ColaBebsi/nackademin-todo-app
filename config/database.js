const mongoose = require('mongoose');

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
        console.error(error.reason);
    });
