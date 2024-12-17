const express = require('express');
const app = express();

app.listen(8080, function () {
    console.log('아빠왔노');
});

app.get('/home', function (req, res) {
    res.send('개미알밥 먹어보라노');
});

app.get('/page', function (req, res) {
    res.sendFile(__dirname + '/main.html')
});