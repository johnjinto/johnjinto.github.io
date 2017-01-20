var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = {
    user: 'postgres',
    database: 'postgres',
    host: 'localhost',
    port: '5432',
    password: 'ilurist'
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
/*app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));*/

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
      <head>
          <title>
              ${title}
          </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/ui/style.css" rel="stylesheet" />
      </head> 
      <body>
          <div class="container">
              <div>
                  <a href="/">Home</a>
              </div>
              <hr/>
              <h3>
                  ${heading}
              </h3>
              <div>
                  ${date.toDateString()}
              </div>
              <div>
                ${content}
              </div>
              <hr/>
              <h4>Comments</h4>
              <div id="comment_form">
              </div>
              <div id="comments">
                <center>Loading comments...</center>
              </div>
          </div>
          <script type="text/javascript" src="/ui/article.js"></script>
      </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'landing.html'));
});

var pool = new Pool(config);
app.get('/test-db', function(req, res){
	pool.query('SELECT * FROM test',function(err, result){
		if(err){
			res.status(500).send(err.toString());
		} else{
			res.send(JSON.stringify(result.rows));
		}
	});
});


//get data from test box
var pool = new Pool(config);
app.get('/test-box', function(req, res){
  pool.query('SELECT * FROM lifebox',function(err, result){
    if(err){
      res.status(500).send(err.toString());
    } else{
      res.send(JSON.stringify(result.rows));
    }
  });
});


// write into db

app.post('/reg-age', function (req, res) {
   // username, password
   // {"username": "tanmai", "password": "password"}
   // JSON
   console.log("In server");
   var userName = req.body.userName;
   var myAge = req.body.myAge;
   
   console.log(userName);
   console.log(myAge);
      
   pool.query('INSERT INTO lifebox (name, age) VALUES ($1, $2)', [userName, myAge], function (err, result) {
  //pool.query('INSERT INTO lifebox (name, age) VALUES ($1, $2)', ['Cathy', 5], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send('User successfully created: ' + userName);
      }
   });
});

app.post('/create-user', function (req, res) {
   // username, password
   // {"username": "tanmai", "password": "password"}
   // JSON
   var username = req.body.username;
   var password = req.body.password;
   var salt = crypto.randomBytes(128).toString('hex');
   var dbString = hash(password, salt);
   pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbString], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send('User successfully created: ' + username);
      }
   });
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/santa.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'santa.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
//app.get('/ui/:fileName', function (req, res) {
 // res.sendFile(path.join(__dirname, 'ui', req.params.fileName));
//});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
