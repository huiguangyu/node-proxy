var express = require('express');
var router = express.Router();
let mysql = require('../utils/mysql')


/* GET users listing. */
router.get('/', function(req, res, next) {
  mysql.query('SELECT runoob_title FROM user', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
    res.send(rows);
  });
});


router.get('/test', function(req, res, next) {
  res.send('router test');
});

module.exports = router;
