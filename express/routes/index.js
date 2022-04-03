var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
var mysql = require('mysql2');

const conn = mysql.createConnection({
    host: '34.123.145.94',
    user: 'root', /* MySQL User */
    password: 'msim707', /* MySQL Password */
    database: 'db1' /* MySQL Database */
});

conn.connect();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

/* GET home page. */
app.get('/', (req, res) => {
  res.send("Demo Website for GroupBuy Application");
});

app.listen(3001,() =>{
  console.log('Server started on port 3001...');
});


app.post('/api/insert', (req,res)=> {
  
  const postId = req.body.postId
  const userId = req.body.userId
  const expirationDate = req.body.expirationDate
  const groupLimit = req.body.groupLimit
  const paymentMethod = req.body.paymentMethod
  const categoryId = req.body.categoryId


  let sqlInsert = 'INSERT INTO Post (postId, userId, expirationDate, groupLimit, paymentMethod, categoryId) VALUE(?,?,?,?,?,?)';
  conn.query(sqlInsert, [postId, userId, expirationDate, groupLimit, paymentMethod, categoryId], (err, result) => {
    console.log(result);
    console.log(err);
  })
});


app.get('/get/User', function(req, res, next) {
  let sqlquery = 'SELECT * FROM User';
  conn.query(sqlquery, function(err, rows){
    if (err) throw err
    else {
      res.json(rows);
    }
  })
});



app.delete('/delete/User/:id',(req, res) => {
  // let sqlQuery = "DELETE FROM User WHERE id="+req.params.id+"";
  let sqlQuery = "SELECT * FROM User WHERE userId="+req.params.id+"";  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
      res.send(apiResponse(results));
  });
});





module.exports = router;
