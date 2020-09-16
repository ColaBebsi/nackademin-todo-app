require('dotenv').config();
require('./config/nedb');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT;
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const { authenticateToken } = require('./middlewares/auth');

// Routers
const todoItemRouter = require('./routes/todoItem');
const todoListRouter = require('./routes/todoList'); 
const userRouter = require('./routes/user');
 
// Routes
app.use('/users', authenticateToken, userRouter);
app.use('/todoitems',  todoItemRouter);
app.use('/todolists', todoListRouter);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}!`);
});

module.exports = app;
