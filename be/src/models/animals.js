// import mongoose from "mongoose";
const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    ID: Number,
    Nome: String,
    Tipo: String
});

module.exports = mongoose.model("Animal", animalSchema);