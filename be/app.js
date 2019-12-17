const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const userRoutes = require("./routes/user")
const axios = require("axios")

express.response.version = 5

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/', userRoutes)



module.exports = app