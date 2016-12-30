var express = require('express');
var app = express();
var http = require('http').Server(app);
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync((process.env.ENTRIES || 'cardentries.json'), 'utf8'));

app.set('port', (process.env.PORT || 8000));

/* This is not how you make a web server. Whatever man. */
app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use(express.static('public'));

app.get('/css/bootstrap.min.css', function(req, res){
  res.sendfile('node_modules/bootstrap/dist/css/bootstrap.min.css');
});

http.listen(app.get('port'), function(){
    console.log('listening on port', app.get('port'));
});
