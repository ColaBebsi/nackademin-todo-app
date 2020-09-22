// Import libraries & database connection
require("dotenv").config();
// require('./config/nedb');
const express = require("express");
const bodyParser = require("body-parser");


// Create Express app
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const { authenticateToken } = require("./middlewares/auth");

/************************************ MONGODB ********************************************/

// Routers MongoDB
const todoItemRouter = require("./routes/mongodb/todoItem");
// const todoListRouter = require('./routes/nedb/todoList');
const userRouter = require("./routes/mongodb/user");

// Routes MongoDB
app.use("/users", userRouter);
app.use("/todoitems", todoItemRouter);
// app.use('/todolists', todoListRouter);

/************************************ NEDB ********************************************/

// Routers NeDB
// const todoItemRouter = require('./routes/nedb/todoItem');
// const todoListRouter = require('./routes/nedb/todoList');
// const userRouter = require('./routes/nedb/user');

// Routes NeDB
// app.use('/users', authenticateToken, userRouter);
// app.use('/todoitems',  todoItemRouter);
// app.use('/todolists', todoListRouter);

module.exports = app;
