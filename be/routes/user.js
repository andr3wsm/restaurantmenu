const express = require("express")
const router  = express.Router()
var mongoose = require("mongodb");
var animalsModel = require("../src/models/animals");

// define the home page route
router.get('/', function(req, res) {
  res.json({"pippo": "poppo"})
});

// define the about route
router.get('/about', function(req, res) {
  res.json({"pippo": "pappo"})
});

router.post("/insertanimal", function(req, res) {
  console.log(req.body.Nome)
  const insertAnimal = new animalsModel({
    // _id: new mongoose.Types.ObjectID(),
    Nome: req.body.Nome,
    Tipo: req.body.Tipo,
  })
  
  insertAnimal.save()
  .then(result => console.log(result))
  .catch(err => console.log(err))

  console.log("Ho inserito il pacchetto nel DB")
  res.send("ok");
});

module.exports = router;

