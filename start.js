require('dotenv').config();
const app = require('./app.js')
const database = require('./config/mongodb');

database.connect()
        .then(() => app
        .listen(process.env.PORT || 3000, () => console.log(`It's running birch ${process.env.PORT}`)));