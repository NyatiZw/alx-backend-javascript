export default class HolbertonCourse {
	constructor(name, length, students) {
		this._name = name;
		this._length = length;
		this._students = students;
	}


	get name() {
		return this._name;
	}


	set name(value) {
		if (typeof value === 'string' && value.length > 0) {
			this._name = value;
		} else {
			console.error("Name must be a string");
		}
	}


	get length() {
		return this._length;
	}


	set length(value) {
		if (value >= 0) {
			this._length = value;
		} else {
			console.error("Length must be a number");
		}
	}


	get students() {
		return this._students;
	}

	set students(value) {
		if (value >= 0) {
			this._students = value;
		}			
	}
}
