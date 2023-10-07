export default function getListStudentsIds(studentArray) {
	// Check if the input is an array
	if (!Array.isArray(studentArray)) {
		return [];
	}


	// Use the map function to extract the ids
	const studentIds = studentArray.map(student => student.id);

	return studentIds;
}
