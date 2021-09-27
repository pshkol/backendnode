// const express = require("express");
// const bodyParser = require('body-parser');
//
// const db = require('./db');
//
// const router = require('./network/routes');
//
// db('mongodb+srv://pshkolnyy:1551125933@cluster0.rzxmw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//
// var app = express();
// app.use(bodyParser.json());
// router(app);
//
// // app.use('/', function (req, res) {
// //   res.send('Hola');
// // })
//
// app.use('/app', express.static('public'));
//
// app.listen(3000);
// console.log("La aplicacion esta escuchando en el http://localhost:3000");
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes');

db('mongodb://user:user1234@ds255107.mlab.com:55107/telegrom');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
