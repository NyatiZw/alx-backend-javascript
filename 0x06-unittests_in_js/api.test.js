// api.test.js
const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Index page', () => {
	let server;
	
	before((done) => {
		server = app.listen(7865, () => {
			done();
		});
	});
	
	after(() => {
		server.close();
	});
	
	it('should return correct status code', (done) => {
		request.get('http://localhost:7865', (error, response) => {
			expect(response.statusCode).to.equal(200);
			done();
		});
	});
	
	it('should return correct result', (done) => {
		request.get('http://localhost:7865', (error, response, body) => {
			expect(body).to.equal('Welcome to the payment system');
			done();
		});
	});
	
	it('should handle other routes with a 404 status code', (done) => {
		request.get('http://localhost:7865/other', (error, response) => {
			expect(response.statusCode).to.equal(404);
			done();
		});
	});
});
