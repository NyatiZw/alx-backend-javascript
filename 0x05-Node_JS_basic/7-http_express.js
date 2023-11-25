const express = require('express');
const fs = require('fs').promise;
const path = require('path');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
	const databasePath = path.join(__dirname, 'database.csv');
	try {
		const studentInfo = await countStudents(databasePath);
		res.send(`This is the list of our students\n${studentInfo}`);
	} catch (error) {
		res.status(500).send('Internal Server Error');
		console.error(error.message);
	}
});

const PORT = 1245;
app.listen(PORT, () => {
	console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
