var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { home: false });
});

router.get('/login', function(req, res, next) {
  res.render('login', { home: false });
});

router.post('/login', function(req, res, next) {
  const { username } = req.body;
  // Here you would normally validate the username and password
  // For this example, we'll just redirect to the home page
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
  res.render('home', { home: true } );
});


module.exports = router;
