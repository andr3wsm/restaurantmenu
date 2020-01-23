const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const userRoutes = require("./routes/user")
const axios = require("axios")
const mongoose =  require("mongoose")

express.response.version = 5

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', userRoutes)
app.use("/about",userRoutes)

module.exports = app