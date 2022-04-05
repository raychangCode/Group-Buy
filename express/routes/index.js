var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
var mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'xxxxxxxx',
  user: 'xxx',
  password: 'xxx',
  database: 'xxx'
});

conn.connect();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* GET home page. */
app.get('/', (req, res) => {
  res.send("Demo Website for GroupBuy Application");
});

app.listen(3001, () => {
  console.log('Server started on port 3001...');
});

app.post('/post/insert', (req, res) => {

  const postId = req.body.postId
  const userId = req.body.userId
  const expirationDate = req.body.expirationDate
  const groupLimit = req.body.groupLimit
  const paymentMethod = req.body.paymentMethod
  const categoryId = req.body.categoryId


  let sqlInsert = 'INSERT INTO Post (postId, userId, expirationDate, groupLimit, paymentMethod, categoryId) VALUE(?,?,?,?,?,?)';
  conn.query(sqlInsert, [postId, userId, expirationDate, groupLimit, paymentMethod, categoryId], (err, result) => {
    console.log(err);
  })
});


app.post('/post/update', (req, res) => {

  const postId = req.body.postId
  const userId = req.body.userId
  const expirationDate = req.body.expirationDate
  const groupLimit = req.body.groupLimit
  const paymentMethod = req.body.paymentMethod
  const categoryId = req.body.categoryId


  let sqlInsert = 'UPDATE Post SET  userId = ? , expirationDate = ? , groupLimit = ? , paymentMethod = ?, categoryId = ? WHERE postId = ?';
  conn.query(sqlInsert, [userId, expirationDate, groupLimit, paymentMethod, categoryId, postId], (err, result) => {
    console.log(err);
  })
});


app.get('/post/read', (req, res) => {
  let sqlquery = 'SELECT * FROM Post LIMIT 10';
  conn.query(sqlquery, (err, result) => {
    res.send(result);
  })
});

app.post('/post/search', (req, res) => {
  const productName = req.body.productName
  let pn = '%' + productName + '%'
  let sqlSearch = "SELECT distinct productName FROM Post NATURAL JOIN Product WHERE productName LIKE '" + pn + "' order by productName LIMIT 10";
  conn.query(sqlSearch, (err, result) => {
    res.send(result);
  })
});

// adv query
app.post('/post/advsearch1', (req, res) => {
  console.log('adv search')
  let sqlSearch = "SELECT userId, userName, COUNT(postId) as numOfPost\
                   FROM User JOIN Post USING (userId)\
                   WHERE expirationDate < ('2022-01-01') AND userName LIKE '%en%'\
                   GROUP BY userId order by numOfPost desc LIMIT 15;";
  conn.query(sqlSearch, (err, result) => {
    console.log(result)
    res.send(result);
  })
});

app.post('/post/advsearch2', (req, res) => {
  console.log('adv search')
  let sqlSearch = "(SELECT c.categoryId, c.categoryName, COUNT(postId) as NumberOfPost\
                    FROM Post p NATURAL JOIN Category c\
                    WHERE p.userId > 500 AND c.categoryName='Meat'\
                    GROUP BY c.categoryId)\
                    UNION\
                    (SELECT c.categoryId, c.categoryName, COUNT(postId) as NumberOfPost\
                    FROM Post p NATURAL JOIN Category c\
                    WHERE p.userId < 100 AND  c.categoryName='Bakery'\
                    GROUP BY c.categoryId );";
  conn.query(sqlSearch, (err, result) => {
    console.log(result)
    res.send(result);
  })

});

app.delete('/post/delete/:id', (req, res) => {
  const deleteId = req.params.id
  let sqlDelete = "DELETE FROM Post WHERE postId = ?";
  conn.query(sqlDelete, deleteId, (err, result) => {
    if (err) console.log(err)
  })
});


module.exports = router;
