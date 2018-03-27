var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Banco', description: 'Run your campaign with Banco' });
});

module.exports = router;
