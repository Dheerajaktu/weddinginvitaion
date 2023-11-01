var createError = require('http-errors');
var express = require('express');
var path = require('path');
const port = 3000;


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res)=> {
  res.render('index1', { title: 'Express' });
})


app.listen(port, () => {
  console.log('server started at port 3000');
})

module.exports = app;
