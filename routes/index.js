var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Guitar Store' });
});
//Seccion about
router.get('/our', function(req, res, next) {
  res.render('our', { title: 'About'});
});



module.exports = router;
