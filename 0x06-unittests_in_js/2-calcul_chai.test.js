const chai = require('chai');
const { add, subtract, divide } = require('./2-calcul_chai');

const expect = chai.expect;

describe('Calculator', () => {
	it('should add two numbers correctly', () => {
		expect(add(2, 3)).to.equal(5);
	});


	it('should subtract two numbers correctly', () => {
		expect(subtract(5, 3)).to.equal(2);
	});


//	it('should multiply two numbers correctly', () => {
//		expect(multiply(4, 3)).to.equal(12);
//	});


	it('should divide two numbers correctly', () => {
		expect(divide(8, 4)).to.equal(2);
	});
});
