require('./database');
const express = require('express');
const bodyParser = require('body-parser');
const todoRoute = require('./routes/todoRoute');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(todoRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});