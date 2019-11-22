"use strict";

const config = {};
const fs = require('fs');

config.port = process.env.PORT || 8080;
config.environment = process.env.ENV || 'devel'; // devel|vmserver|luca|dockerserver
config.logLevel = process.env.LOGLEVEL || 'info';


/**
 * mongodb ENV=devel
 
config.mongodb = {
	team: "mongodb://192.168.10.80:27017/team"
}
*/
config.JWT_KEY = "my key"


/****************/
module.exports = config;

