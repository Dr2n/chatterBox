var express = require('express');
var chatterBox = express();

var http = require('http').Server(chatterBox);
var io = require('socket.io')(http);

chatterBox.use(express.static('static'));
chatterBox.use(express.static('/node_modules/socket.io.client-/'))

io.on('connection', function(socket){
	console.log("A user has been connected.");
	
	socket.on('newMessage', function(message){
		console.log(message);

		io.emit('newMessage', message);
	});

	socket.on('disconnect', function(){
		console.log('A user has just disconnected.');
	})

});

var server = http.listen(8888, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Initiated chatterBox. Running at %s on %s.', host, port);
});