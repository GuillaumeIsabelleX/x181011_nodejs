var express = require('express')
var app = express()


//@urir https://expressjs.com/tr/starter/basic-routing.html


//
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})


app.get('/', function (req, res) {
  res.send('Hello World!')
})

//POST
app.post('/', function (req, res) {
  res.send('Got a POST request')
})


//Respond to a PUT request to the /user route:

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

//Respond to a DELETE request to the /user route:

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

//this route path will match anything with an “a” in the route name.

app.get(/a/, function (req, res) {
  res.send('/a/')
})


//To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})