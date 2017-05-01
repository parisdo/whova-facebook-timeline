var PORT = 5000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');
// var config = require('./.config.js');


// Create the server instance
var app = express();

// Print logs to the console and compress pages we send
app.use(express.logger());
app.use(express.compress());

// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.htmls
// maps to /static/index.html on this machine
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.sendfile('./static/index.html');
});

// Start the server
var port = process.env.PORT || 5000; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});
