require('dotenv').config();
require('./config/nedb');
const express = require('express');
const bodyParser = require('body-parser');
const todoItemRoutes = require('./routes/todoItemRoutes');
const todoListRoutes = require('./routes/todoListRoutes'); 
const authRoutes = require('./routes/authRoutes');
// const { authenticateToken, isAdmin } = require('./middlewares/authMiddelware');

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 
// Routes
app.use('/todoitems', todoItemRoutes);
app.use('/todolists', todoListRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}!`);
});

module.exports = app;
