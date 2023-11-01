var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index1', { title: 'Express' });
});


router.get('/home', function(req, res, next) {
  res.render('landing', { title: 'Express' });
});

module.exports = router;