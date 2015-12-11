window.addEventListener("load", startChatter, false);

function startChatter(){
	window.param = {
		username: "DR2N",
		channel: "Howday"
	};

	window.param. username = prompt('name');

	window.socket = io();
	socket.addEventListener('newMessage', receiveMessage, false);


	window.textEntry = document.getElementById('textEntry');
	window.sendButton = document.getElementById('sendButton');
	window.messageList = document.getElementById('messageList');

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
	var messageText = textEntry.value.trim();

	if (!messageText){
		return;
	}

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
	var messageElement = document.createElement('li');
	var messageTextElement = document.createElement('div')
	messageTextElement.innerHTML = message.contents;

	
	messageElement.setAttribute('class', 'message');
	messageTextElement.setAttribute('class', 'messageText');



	if (message.sender == window.param.username){

		messageElement.setAttribute('class', 'message right');

	}else{
		var senderElement = document.createElement('div');
		senderElement.setAttribute('class', 'messageSender');
		senderElement.innerHTML = message.sender[0].toUpperCase();
		senderElement.setAttribute('title', message.sender);
		messageElement.appendChild(senderElement);

	}

	messageElement.appendChild(messageTextElement);
	messageList.appendChild(messageElement);

	messageList.scrollTop = messageList.scrollHeight;
}