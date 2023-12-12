const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
	it('should return a resolved promise with the correct data for success case', (done) => {
		getPaymentTokenFromAPI(true)
		.then((result) => {
			expect(result).to.deep.equal({ data: 'Successful response from the API' });
			done();
		})
		.catch(done);
	});

	it('should return a resolved promise with undefined for failure case', (done) => {
		getPaymentTokenFromAPI(false)
		.then((result) => {
			expect(result).to.be.undefined;
			done();
		})
		.catch(done);
	});
});
