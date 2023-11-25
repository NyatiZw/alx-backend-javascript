const fs = require('fs').promises;

/**
 * Count the number of students in the given CSV file
 * @param {string} path - The path to the CSV file
 * @returns {Promise<void>} A promise that resolves when the operation is complete
 */
function countStudents(path) {
	return new Promise(async (resolve, reject) => {
		try {
			// Read the CSV file asynchronously
			const data = await fs.readFile(path, 'utf-8');
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
						fieldCounts[header]++;
					}
				});
			}

			console.log(`Number of students: ${lines.length - 1}`);
			headers.forEach((header) => {
				console.log(`Number of students in ${header}: ${fieldCounts[header]}. List: ${getNamesList(header, lines)}`);
			});

			resolve();
		} catch (error) {
			reject(new Error('Cannot load the database'));
		}
	});
}

function getNamesList(field, lines) {
	const fieldIndex = 1;
	const names = lines.slice(1).map((line) => line.split(',')[fieldIndex].trim());
	return names.join(', ');
}

module.exports = countStudents;
