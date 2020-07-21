var express = require("express");
var socket = require("socket.io");
var app = express();
var port = 4000;

var server = app.listen(port, () =>
	console.log(`Server running on port ${port}!`)
);

var io = socket(server);

io.on("connection", function (socket) {
	console.log(`socket is connected`);
	socket.on("chat", function (clientData) {
		io.sockets.emit("chat", clientData);
	});

	socket.on("typing", function (feedback) {
		socket.broadcast.emit("typing", feedback);
	});
});

app.use(express.static("public"));
