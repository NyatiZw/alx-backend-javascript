const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	const databasePath = path.join(__dirname, 'database.csv');
	if (req.url === '/') {
		res.end('Hello Holberton School!');
	} else if (req.url === '/students') {
		try {
			const studentInfo = await countStudents(databasePath);
			res.end(`This is the list of our students\n${studentInfo}`);
		} catch (error) {
			res.statusCode = 500;
			res.end('Internal Server Error');
			console.error(error.message);
		}
	} else {
		res.statusCode = 400;
		res.end('Not Found');
	}
});

const PORT = 1245;
app.listen(PORT, () => {
	console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
