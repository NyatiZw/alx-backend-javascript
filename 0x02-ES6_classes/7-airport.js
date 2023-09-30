// 7-airport.js file
class Airport {
	constructor(name, code) {
		this._name = name;
		this._code = code;
	}

	toString() {
		return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
	}
}


export default Airport;
