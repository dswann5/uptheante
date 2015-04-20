
// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/trivia', function(req, res) {
  res.render('trivia', { message: 'Welcome to the UpTheAnte Trivia sample page!' });
});

app.post('/trivia', function(req, res) {
  console.log("New trivia post request: " + req.body.answer);
  if (req.body.answer == "John Urschel") {
       res.render('trivia', { message: req.body.answer + " is correct!" });
  }
  else {
       res.render('trivia', { message: req.body.answer + " is incorrect!" });
  }
});

app.get('/clickmania', function(req, res) {

  var scores = "0";
  var clickSesh = Parse.Object.extend("ClickSesh");

  var query = new Parse.Query(clickSesh);
  query.get("KEC51QDLDA", {
    success: function(object) {
    // object is an instance of Parse.Object
    console.log("YES");
  },

  error: function(object, error) {
    // error is an instance of Parse.Error.
    console.log("NO");
  }
});

 /* var query = new Parse.Query("ClickSesh");
  query.find({
  success: function(results) {
    scores = results.get("duke_score");
    console.log(scores);
  },

  error: function(error) {
    // error is an instance of Parse.Error.
    console.log(error);
  }
});*/
  res.render('clickmania', { message: 'Click your heart out!', duke_score: scores, wisconsin_score: scores});
});

app.post('/echo', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.send('echoing: ' + req.body.message);
});

// // Example reading from the request query string of an HTTP get request.
// app.get('/test', function(req, res) {
//   // GET http://example.parseapp.com/test?message=hello
//   res.send(req.query.message);
// });

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

/*app.post('/echo', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.send('echoing: ' + req.body.message);
});*/

// Attach the Express app to Cloud Code.
app.listen();
