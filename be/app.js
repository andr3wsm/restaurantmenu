const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const userRoutes = require("./routes/user")

express.response.version = 5

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', userRoutes)


module.exports = app