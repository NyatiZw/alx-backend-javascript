export default function getStudentsByLocation(studentList, city) {
	// Use the filter function to find students
	const filteredStudents = studentList.filter(student => student.location == city);


	return filteredStudents;
}
