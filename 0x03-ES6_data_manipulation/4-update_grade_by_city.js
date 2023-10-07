export default function updateStudentGradeByCity(studentList, city, newGrades) {
	// Create copy of student list first
	const updatedStudents = [...studentList];

	// Find students in the specified city
	const studentsInCity = updatedStudents.filter(student => student.location === city);

	// Update the grades for students in the specified city
	studentsInCity.forEach(student => {
		const matchingGrade = newGrades.find(grade => grade.id === student.id);
		if (matchingGrade) {
			student.grade = matchingGrade.grade;
		}
	});

	return updatedStudents;
}
