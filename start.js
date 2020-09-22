require("dotenv").config();
// console.log("ENVIROMENT:", process.env.ENVIROMENT);
const app = require("./app.js");
const database = require("./config/mongodb");
const port = process.env.PORT || 3000

database
  .connect()
  .then(() =>
    app.listen(port, () =>
      console.log(`It's running birch ${process.env.PORT}`)
    )
  );
