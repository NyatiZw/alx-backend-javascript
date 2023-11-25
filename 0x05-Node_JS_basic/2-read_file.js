const fs = require('fs');

/**
 * Count the number in the CSV file
 * @param {string} path - path to the CSV file.
 * @throws {Error} Throws an error if the database
 */
function countStudents(path) {
	try {
		const data = fs.readFileSync(path, 'utf-8');
		const lines = data.split('\n').filter((line) => line.trim() !== '');
		const headers = lines[0].split(',');
		const fieldCounts = {};
		headers.forEach((header) => {
			fieldCounts[header] = 0;
		});

		for (let i = 1; i < lines.length; i++) {
			const values = lines[i].split(',');

			headers.forEach((header, index) => {
				if (values[index].trim() !== '') {
					fieldCounts[headers]++;
				}
			});
		}

		console.log(`Number of students: ${lines.length - 1}`);
		headers.forEach((header) => {
			console.log(`Number of students in ${header}: ${fieldCounts[header]}. List: ${getNamesList(header, lines)}`);
		});
	} catch (error) {
		throw new Error('Cannot load the database');
	}
}

function getNamesList(field, lines) {
	const fieldIndex = 1;
	const names = lines.slice(1).map((line) => line.split(',')[fieldIndex].trim());
	return names.join(', ');
}

module.exports = countStudents;
