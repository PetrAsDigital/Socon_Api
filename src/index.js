var express = require('express');
var app = express();
var FakeData = require('./FakeData.json');

app.get('/health', function (req, res) {
    res.sendStatus(200);
});

app.get('/get', function (req, res) {
    console.log(JSON.stringify(FakeData,null,2));

    res.sendStatus(FakeData);
});


var listeningPort = process.env.PORT0 || 8081;

var server = app.listen(listeningPort, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
});