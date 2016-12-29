var express = require('express');
var app = express();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 8000));

/* This is not how you make a web server. Whatever man. */
app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use(express.static('public'));

http.listen(app.get('port'), function(){
    console.log('listening on port', app.get('port'));
});
