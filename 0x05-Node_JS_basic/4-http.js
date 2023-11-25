const http = require('http');

//Create a small HTTP server
const app = http.createServer((req, res) => {
	// Set the response headers
	res.writeHead(200, { 'Content-Type': 'text/plain' });

	// Send the response body
	res.end('Hello Holberton School!');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
	console.log(`Server is running and listening on port ${PORT}`);
});


// Export the app variable
module.exports = app;
