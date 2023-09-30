export default class HolbertonClass {
	constructor(size, location) {
		this._size = size;
		this._location = location;
	}


	get size() {
		return this.size;
	}

	get locaton() {
		return this._location;
	}

	// When cast into a Number, it should return the size
	valueOf() {
		return this._size;
	}

	// When cast into a String, it should return the location
	toString() {
		return this._location;
	}
}
