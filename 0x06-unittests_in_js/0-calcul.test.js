const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
	it('should return the sum of rounded numbers', () => {
		assert.strictEqual(calculateNumber(1, 3), 4);
		assert.strictEqual(calculateNumber(1, 3.7), 5);
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});

	it('float point whole numbers', () => {
		assert.strictEqual(calculateNumber(1.0, 3.0), 4);
	});
	it('round down a and b\s floating point number', () => {
		assert.strictEqual(calculateNumber(1.4, 3), 4);
	});
	it('round up a and b\s floating point numbers', () => {
		assert.strictEqual(calculateNumber(1.4, 3.2), 5);
	});
});
