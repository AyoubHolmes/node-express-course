const express = require('express');
const app = express();

const bodyParser = require('body-parser');
//const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]

/* *************** BODYPARSER *******************

app.use(function( req, res, next ) {
    var data = '';
    req.on('data', function( chunk ) {
      data += chunk;
    });
    req.on('end', function() {
      req.rawBody = data;
      console.log( 'on end: ', data )
      if (data && data.indexOf('{') > -1 ) {
        req.body = JSON.parse(data);
      }
      next();
    });
  });
  */



app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockuUername = "AyoubHolmes";
    const mockPassword = "AyoubHolmes";
    if (username === mockuUername && password === mockPassword) {
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

app.listen(8000, function() {
    console.log("server is running 1")
})

app.listen(3000, function() {
    console.log("server is running 2")
})