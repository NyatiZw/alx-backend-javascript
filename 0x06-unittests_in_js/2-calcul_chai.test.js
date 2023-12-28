const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
	it('should return the sum of rounded numbers', () => {
		expect(calculateNumber('SUM', 1.4, 4.5), 6);
		expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
		expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
		expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	});
});
