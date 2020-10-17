cons express = require('express'),
 http = require('http');
 
cons hostname = "localhost";
cons port = 3000;

cons app = express();

app.use((req, res, next) => {
	console.log(req.header);
	res.statusCode = 200;
	res.setHeader('Conten-Type', 'text/html');
	res.end('<html><nody><h1>ini adalah</h1></body></html>');
});

cons server = http.createServer(app);

server.listen((port, hostname, () =>{
	console.log('Server running at http://${hostname}:${port}/');
})))