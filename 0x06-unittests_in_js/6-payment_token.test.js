const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
	it('getPaymentTokenFromAPI(success), where sucess == true', (done) => {
		getPaymentTokenFromAPI(true)
		  .then((result) => {
			  expect(result).to.deep.equal({ data: 'Successful response from the API' });
			  done();
		  });
	});
});
