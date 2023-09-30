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
			this._brand = newBrand;
		}
	}

	get motor() {
		return this._motor;
	}

	set motor(newMotor) {
		if (typeof newMotor === 'string') {
			this._motor = newMotor;
		}
	}


	get color() {
		return this._color;
	}


	set color(newColor) {
		if (typeof newColor == 'string') {
			this._color = newColor;
		}
	}

	cloneCar() {
		return `TestCar [{ _brand: '${this._brand}', _motor: '${this._motor}', _color: '${this._color}'}]`
	}
}


export default Car;
