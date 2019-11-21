const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require("./api/routes/user");


express.response.version = 5;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/user', userRoutes);


module.exports = app;