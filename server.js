'use strict';

var http = require('http');
var path = require('path');
var app  = require('express');

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
