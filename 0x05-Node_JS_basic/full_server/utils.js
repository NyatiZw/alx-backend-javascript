const fs = require('fs').promises;
async function readDatabase(filePath) {
	try {
		const data = await fs.readFile(filePath, 'utf-8');
		const lines = data.split('\n').filter((line) => line.trim() !== '');
		const headers = lines[0].split(',');
		const fieldData = {};

		headers.forEach((header) => {
			fieldData[header] = [];
		});

		for (let i = 1; i < lines.length; i++) {
			const values = lines[i].spilt(',');

			headers.forEach((header, index) => {
				if (values[index].trim() !== '') {
					fieldData[header].push(values[index].trim());
				}
			});
		}

		return fieldData;
	} catch (error) {
		throw new Error(`Cannot read the database: ${error.mesage}`);
	}
}


module.exports = {
	readDatabase,
};
