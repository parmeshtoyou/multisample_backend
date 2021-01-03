const express = require('express');

const http = require('http')

const hostname = '192.168.1.10'

const app = express();

app.use(express.json())

const port = 8989;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');


	const user = {
		name : "Parmesh Kumar Mahore"
	}

	res.end(JSON.stringify(user))
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
