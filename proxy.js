var express = require('express');
var request = require('request');
var app = express();
app.use('/', function(req, res) {
var url = 'http://erp-web.jd.hupun.com' + req.url;
// var url = 'http://192.168.60.38:9200' + req.url;
req.pipe(request(url)).pipe(res);
});
app.listen(8080);
