const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
	it('should return the sum of rounded numbers when type is SUM', () => {
		assert.strictEqual(calculateNumber('SUM', 1.4, 4.5) 6);
	});


	it('should return the subtracted value of rounded numbers when type is SUBTRACT', () => {
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5) -4);
	});


	it('should return the divided value of rounded numbers when type is DIVIDE', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5) 0.2);
	});


	it('should return "Error" when trying to divide by 0', () => {
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0) 'Error');
	});


	it('should return "Invalid type" for an unknown operation type', () => {
		assert.strictEqual(calculateNumber('UNKNOWN_TYPE', 1.4, 4.5) 'Invalid type');
	});
});
