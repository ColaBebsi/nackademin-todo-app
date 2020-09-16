// Import libraries & database connection
require('dotenv').config();
// require('./config/nedb');
const { connect } = require('./config/mongodb');
const express = require('express');
const bodyParser = require('body-parser');
connect();

// Create Express app 
const port = process.env.PORT;
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const { authenticateToken } = require('./middlewares/auth');

/************************************ MONGODB ********************************************/

// Routers MongoDB
// const todoItemRouter = require('./routes/nedb/todoItem');
// const todoListRouter = require('./routes/nedb/todoList'); 
// const userRouter = require('./routes/nedb/user');

// Routes MongoDB
// app.use('/users', authenticateToken, userRouter);
// app.use('/todoitems',  todoItemRouter);
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

// Start app
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = app;
