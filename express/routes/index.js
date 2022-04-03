var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

var conn = mysql.createConnection({
	host: 'XXX',
	user: 'XXX',
	password: 'XXX',
	database: 'XXX'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET database. */
router.get('/db', function(req, res, next) {
  let sqlQry = 'SELECT * FROM User';
  conn.query(sqlQry, function(err, rows){
		if (err) {throw err && res.send('error from the database side.');}
		else {
			// res.render('index', results);
      res.json(rows);
    }
  });
  // res.render('index', { title: 'Express' });
});


// conn.query('SELECT * FROM User', function(err, rows, field) {
// 	if (err) throw err;
// 	console.log('The result is: ', rows);
// 	conn.end();
// });

module.exports = router;
