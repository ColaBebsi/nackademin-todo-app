const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost/tododb';

function connect() {
    if (process.env.NODE_ENV === 'test') {
        console.log('Connected to mock MongoDB!');

        const { MongoMemoryServer } = require('mongodb-memory-server');
        const mongoServer = new MongoMemoryServer();
    
        mongoose.Promise = Promise;
        mongoServer
            .getUri()
            .then((mongoUri) => {
                const mongooseOpts = {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true
                };
                mongoose.connect(mongoUri, mongooseOpts);

                mongoose.connection.on('error', (e) => {
                    if (e.message.code === 'ETIMEDOUT') {
                        console.log(e);
                        mongoose.connect(mongoUri, mongooseOpts);
                    }
                    console.log(e);
                });

                mongoose.connection.once('open', () => {
                    console.log(`MongoDB successfully connected to ${mongoUri}`);
                });
            });
    } else {
        mongoose.connect(DB_URI, {
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
    }
}

const disconnect = () => {
    return mongoose.disconnect();
}

module.exports = { connect, disconnect };
