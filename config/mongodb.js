require("dotenv").config();
const mongoose = require("mongoose");

let mongoDatabase;

switch (process.env.NODE_ENV) {
  case "development":
  case "test":
    const { MongoMemoryServer } = require("mongodb-memory-server");
    mongoDatabase = new MongoMemoryServer();
    break;
  case "production":
  case "staging":
    mongoDatabase = {
      getUri: () =>
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jycrt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    };
    break;
}

async function connect() {
  let uri = await mongoDatabase.getUri();

  await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      console.log(`Connected to ${uri}`);
    })
    .catch((error) => {
      console.error(error.reason);
    });
}

async function disconnect() {
  if (process.env.NODE_ENV == "test" || process.env.NODE_ENV == "development") {
    await mongoDatabase.stop();
  }

  await mongoose.disconnect();
}

module.exports = {
  connect,
  disconnect,
};
