var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
var mysql = require('mysql2');

const conn = mysql.createConnection({
    host: '34.123.145.94',
    user: 'ken',
    password: '123',
    database: 'db1'
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

app.post('/post/insert', (req,res)=> {

  const postId = req.body.postId
  const userId = req.body.userId
  const expirationDate = req.body.expirationDate
  const groupLimit = req.body.groupLimit
  const paymentMethod = req.body.paymentMethod
  const categoryId = req.body.categoryId


  let sqlInsert = 'INSERT INTO Post (postId, userId, expirationDate, groupLimit, paymentMethod, categoryId) VALUE(?,?,?,?,?,?)';
  conn.query(sqlInsert, [postId, userId, expirationDate, groupLimit, paymentMethod, categoryId], (err, result) => {
    // console.log(result);
    console.log(err);
  })
});


app.get('/post/read', (req, res) => {
  let sqlquery = 'SELECT * FROM Post LIMIT 10';
  conn.query(sqlquery, (err, result)=> {
    res.send(result);
  })
});

app.post('/post/search', (req,res)=> {
  const productName = req.body.productName
  let pn = '%' + productName + '%'
  let sqlSearch = "SELECT * FROM Post NATURAL JOIN Product WHERE productName LIKE '"+pn+"'";
  conn.query(sqlSearch, (err, result) => {
    // console.log("SQL query:")
    // console.log(sqlSearch)
    // console.log(result)
    res.send(result);
    // console.log("error", err);
  })
});

app.delete('/post/delete/:postId',(req, res) => {
  const id = req.params.postId
  let sqlDelete = "DELETE FROM Post WHERE userId = ?";
  conn.query(sqlDelete, id, (err, result) => {
    if (err) console.log(err)
  })
});


module.exports = router;
