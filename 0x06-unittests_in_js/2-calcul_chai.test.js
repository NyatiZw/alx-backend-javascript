const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
	it('should return the sum of rounded numbers', () => {
		expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
		expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
		expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
		expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
		expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
	});
});
