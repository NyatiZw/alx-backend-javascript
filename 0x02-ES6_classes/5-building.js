export default class Building {
	constructor(sqft) {
		this._sqft = sqft;
	}

	get sqft() {
		return this._sqft;
	}


	set sqft(newSqft) {
		if (newSqft instanceof sqft) {
			this._sqft = newSqft;
		}
	}

	evacuationWarningMessage() {
		throw new Error("Class extending Building must override evacuationWarningMessage");
	}
}
