window.addEventListener("load", startChatter, false);

function startChatter(){
	window.param = {
<<<<<<< HEAD
		username: "DR2N",
		channel: "Howday"
	};

	window.param. username = prompt('name');
=======
		username: "",
		channel: "Open"
	};

	window.param.username = prompt("What is your name?");
	//window.channel = prompt("Join a channel!");
>>>>>>> bd20c5187830511f28d112a2333d96bba1bfef1d

	window.socket = io();
	socket.addEventListener('newMessage', receiveMessage, false);


	window.textEntry = document.getElementById('textEntry');
	window.sendButton = document.getElementById('sendButton');
<<<<<<< HEAD
	window.messageList = document.getElementById('messageList');
=======
	window.messageArea = document.getElementById('messages');
>>>>>>> bd20c5187830511f28d112a2333d96bba1bfef1d

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
<<<<<<< HEAD
	var messageText = textEntry.value.trim();

	if (!messageText){
		return;
	}

=======
	var messageText = textEntry.value;
>>>>>>> bd20c5187830511f28d112a2333d96bba1bfef1d
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
<<<<<<< HEAD
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
=======
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
>>>>>>> bd20c5187830511f28d112a2333d96bba1bfef1d
}