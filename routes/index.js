var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { home: false });
});

router.get('/login', function(req, res, next) {
  res.render('login', { home: false });
});

router.post('/login', function(req, res) {
  const { username } = req.body;
  if (username !== "fareeh") {
    return res.send(`
      <script>
        alert("Invalid username or password");
        window.location.href = "/login";
      </script>
    `);
  }
  res.redirect('/home');
});


router.get('/home', function(req, res, next) {
  res.render('home', { home: true, user: { name: "Fareeh" } } );
});

router.get('/course',   function(req, res, next) {
  const name = req.query.name;
  res.render('courses', { home: true, courseName:name } );
});
module.exports = router;
