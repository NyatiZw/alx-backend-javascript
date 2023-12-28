const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
	it('should return the sum of rounded numbers', () => {
		assert.strictEqual(calculateNumber(1.4, 4.5), 6);
		assert.strictEqual(calculateNumber(1.4, 4.5), -4);
		assert.strictEqual(calculateNumber(1.4, 4.5), 0.2);
		assert.strictEqual(calculateNumber(1.4, 0), 'Error');
	});
});
