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
			this._brand = newBrand; /* Update the property with new value*/
		}
	}

	get motor() {
		return this._motor;
	}

	set motor(newMotor) {
		if (typeof newMotor === 'string') {
			this._motor = newMotor; /* Update the property with new value*/
		}
	}


	get color() {
		return this._color;
	}


	set color(newColor) {
		if (typeof newColor === 'string') {
			this._color = newColor; /*Update the property eith new value*/
		}
	}


	cloneCar() {
		/* New TestCar instance with the same properties as this instance*/
		return new this.constructor();
	}
}


export default Car;
