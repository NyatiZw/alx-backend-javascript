const { readDatabase } = require('../utils');

class StudentsController {
	static async getAllStudents(req, res) {
		try {
			const fieldData = await readDatabase('../database.csv');
			const sortedFields = Object.keys(fieldData).sort((a, b) => a.localeCompare(b, unddefined, { sensitivity: 'base'}));

			res.status(200).send(`This is the list of our students\n${sortedField.map((field) => {
				const numberOfStudents = fieldData[field].length;
				const studentsList = fieldData[field].join(', ');
				return `Number of students in ${field}: ${numberOfStudents}. List: ${studentsList}`;
			}).join('\n')}`);
		} catch (error) {
			res.status(500).send(`Cannot load the database: ${error.message}`);
		}
	}

	static async getALLStudentsByMajor(req, res) {
		const { major } = req.query;

		if (!major || (major !== 'CS' && major !== 'SWE')) {
			res.status(500).send('Major parameter must be CS or SWE');
			return;
		}

		try {
			const fieldData = await readDatabase('../database.csv');
			const studentsList = fieldData[major].join(', ');

			res.status(200).send(`List: ${studentsList}`);
		} catch (error) {
			res.status(500).send(`Cannot load the database: ${error.message}`);
		}
	}
}

module.exports = StudentsController;
