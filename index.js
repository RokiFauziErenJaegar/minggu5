const express = require('express'),
 http = require('http');
 
const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req, res, next) => {
	console.log(req.header);
	res.statusCode = 200;
	res.setHeader('Conten-Type', 'text/html');
	res.end('<html><body><h1>ini adalah server express</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () =>{
	console.log(`Server running at http://${hostname}:${port}/`);
});