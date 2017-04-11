"use strict"
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

aimlInterpreter = require('aimlinterpreter');
var aimlInterpreter = new aimlInterpreter(
  {name:'xatbot'},
  {age: '26'},
  {website:'xatbot.herokuapp.com'}
);

aimlInterpreter.loadAIMLFilesIntoArray(['./dialogs/xatbot.aiml']);

var ans;

var callback = function(answer, wildCardArray, input){
    console.log(answer + ' | ' + wildCardArray + ' | ' + input);
    ans = answer ; // to be sent back to the client
};

io.on('connection', function (socket) {
/* This is the example given on socket.io site
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
*/
  socket.on('aiml', function(msg){
    aimlInterpreter.findAnswerInLoadedAIMLFiles(msg, callback);
    socket.emit('aiml', ans);
  });
});

let port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
