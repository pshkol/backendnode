const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes');

db ('mongodb://localhost:27017/telegrom')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
