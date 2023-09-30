/*10-car.js */
/*eslint-disable no-underscore-dangle*/

class Car {
	constructor (brand, motor, color) {
		this._brand = brand;
		this._motor = motor;
		this._color = color;
	}


	get brand() {
		return this._brand;
	}


	set brand(newBrand) {
		if (typeof newBrand === 'string') {
			return this._brand;
		}
	}

	get motor() {
		return this._motor;
	}

	set motor(newMotor) {
		if (typeof newMotor === 'string') {
			return this._motor;
		}
	}


	get color() {
		return this._color;
	}


	set color(newColor) {
		if (typeof newColor == 'string') {
			return this._color;
		}
	}

	cloneCar() {
		return `TestCar [{ _brand: '${this._brand}', _motor: '${this._motor}', _color: '${this._color}'}]`
	}
}


export default Car;
