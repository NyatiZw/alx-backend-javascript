const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
	describe('type == "SUM"', () => {
		expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
	});

	it('equal positive numbers (alternate)', () => {
		expect(calculateNumber('SUM', 2.3, 1.0)).to.equal(4);
	});

	it('equal negative numbers', () => {
		expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
	});

	it('equal negative numbers (alternate)', () => {
		expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
	});

	it('negative and positive numbers', () => {
		expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
	});
	
	it('positive and negative numbers', () => {
		expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
	});

	it('positive and negative numbers', () => {
		expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
	});

	describe('type == "SUBTRACT"', () => {
		it('equal positive numbers', () => {
			expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
		});

		it('equal positive numbers (alternate)', () => {
			expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
		});

		it('equal negative numbers', () => {
			expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
		});

		it('equal negative numbers (alternate)', () => {
			expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
		});

		it('negative and positive numbers', () => {
			expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
		});

		it('positive and negative numbers', () => {
			expect(calculateNumber('SUBTRACR', 2.0, -2.0)).to.equal(4.0);
		});

		it('0 and 0', () => {
			expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
		});
	});

	describe('type == "DIVIDE"', () => {
		it('equal positive numbers', () => {
			expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
		});

		it('numbers with different signs', () => {
			expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
		});

		it('numbers with different signs (alternate)', () => {
			expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(3.5);
		});
		
		it('equal positive numbers', () => {
			expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
		});

		it('equal negative numbers', () => {
			expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
		});

		it('equal rounded numbers', () => {
			expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
		});

		it('equal rounded down numbers', () => {
			expect(calculateNumber('DIVIDE', 2.6, 230)).to.equal(1);
		});

		it('0 and positive number', () => {
			expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
		});

		it('0 and negative numbers', () => {
			expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
		});

		it('equal positive numbers', () => {
			expect(calculateNumber('DEVIDE', 2.0, 2.0)).to.equal(0);
		});
		it('0 and 0', () => {
			expect(calculateNumber('DEVIDE', 0.0, 0.0)).to.equal('Error');
		});
	});
});
