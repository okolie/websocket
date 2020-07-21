var socket = io.connect("http://localhost:4000");

var handle = document.querySelector("#handle");
var message = document.querySelector("#message");
var btn = document.querySelector("#send");
var output = document.querySelector("#output");
var feedback = document.querySelector("#feedback");

btn.addEventListener("click", function (event) {
	console.log("send button");
	socket.emit("chat", {
		handle: handle.value,
		message: message.value,
	});
	message.value = "";
});

message.addEventListener("keypress", function (event) {
	socket.emit("typing", { handle: handle.value });
});

// listen for event from server
socket.on("chat", function ({ handle, message }) {
	output.innerHTML += `<p><strong>${handle}:</strong><i> ${message}</i></p>`;
	feedback.innerHTML = "";
});

socket.on("typing", function ({ handle }) {
	feedback.innerHTML = `<em>${handle} is typing...</em>`;
});
