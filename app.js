require('dotenv').config();
require('./config/database');
const express = require('express');
const bodyParser = require('body-parser');
const todoItemRoutes = require('./routes/todoItemRoutes');
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 
// Routes
app.use(todoItemRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}!`);
});