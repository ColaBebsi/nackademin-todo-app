const mongoose = require('mongoose')
require('dotenv').config()

let mongoDatabase

switch(process.env.ENVIRONMENT){
    case 'development':
    case 'test':
        const {MongoMemoryServer} = require('mongodb-memory-server')
        mongoDatabase = new MongoMemoryServer()
        break;
    case 'production':
    case 'staging':
        mongoDatabase = {
            // mongodb+srv://user:password@host/dbname
            getUri: async () => 
                `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
        }
        break;
}

async function connect() {
    
    // let uri = await mongoDatabase.getUri()
    let uri = 'mongodb://localhost:27017/nackademin-todo-app-db-dev';

    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => {
    console.log(`Connected to ${uri}`);
    })
    .catch((error) => {
        console.error(error.reason);
    });
}

async function disconnect() {
    if(process.env.ENVIRONMENT == 'test' || process.env.ENVIRONMENT == 'development'){
        await mongoDatabase.stop()
    }
    await mongoose.disconnect()
}


module.exports = {
    connect, disconnect
}