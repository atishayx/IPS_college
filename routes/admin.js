var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is Admin Router');
});
router.get('/page', function(req, res, next) {
    res.render('admin');
  });

  router.get('/clickme', function(req, res, next) {
    res.render('clickme');
  });

module.exports = router;
