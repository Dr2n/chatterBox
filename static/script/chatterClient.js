window.addEventListener("load", startChatter, false);

function startChatter(){
	window.param = {
		username: "",
		channel: "Open"
	};

	window.param.username = prompt("What is your name?");
	//window.channel = prompt("Join a channel!");

	window.socket = io();
	socket.addEventListener('newMessage', receiveMessage, false);


	window.textEntry = document.getElementById('textEntry');
	window.sendButton = document.getElementById('sendButton');
	window.messageArea = document.getElementById('messages');

	textEntry.addEventListener('keydown', textKeyHandler, false);
	sendButton.addEventListener('click', postMessage, false);
}

function textKeyHandler(event){
	if (event.keyCode == 13){
		event.preventDefault();
		postMessage();
	}
}

function postMessage(){
	var messageText = textEntry.value;
	var message = {
		contents: messageText,
		sender: param.username,
		channel: param.channel
	}

	socket.emit('newMessage', message);
	
	textEntry.value = "";
	textEntry.setSelectionRange(0,0)
}

function receiveMessage(message){
	var messageDiv = document.createElement('div');
	var lineBreak = document.createElement('br');
	messageDiv.innerHTML = message.contents;
	messageDiv.setAttribute('class', 'message');

	if (message.sender == window.param.username){
		messageDiv.style.float = 'right';
	}else{
		messageDiv.style.float = 'left';
	}

	messageArea.appendChild(messageDiv);
	messageArea.appendChild(lineBreak);

	messageArea.scrollTo(0, messageArea.scrollHeight);
}