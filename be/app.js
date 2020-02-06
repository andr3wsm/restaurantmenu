const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const userRoutes = require("./routes/user")
const axios = require("axios")
const config = require("./config")
const mongoose =  require("mongoose")

config.mongodb = {
    mydb: "mongodb://127.0.0.1:27017/mydb"
}

mongoose
.connect(config.mongodb.mydb, {useNewUrlParser: true, autoIndex: false, useUnifiedTopology: true})
.then(()=>console.log("mydb connection done"))
.catch(error => handleError(error))

express.response.version = 5

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', userRoutes)
app.use("/about",userRoutes)

module.exports = app