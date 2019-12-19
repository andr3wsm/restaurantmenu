const express = require("express")
const router  = express.Router()

// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});

// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

router.get('/json', function(req, res) {
  res.json({'pippo': 'poppo'})
})

module.exports = router;

