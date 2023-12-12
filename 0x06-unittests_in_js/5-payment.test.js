const { expect } = require('chai');
const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
	let consoleLogSpy;

	beforeEach(() => {
		consoleLogSpy = sinon.spy(console, 'log');
	});

	afterEach(() => {
		consoleLogSpy.restore();
	});

	it('should log the correct message and be called once for 100 and 20', () => {
		sendPAymentRequestToApi(100, 20);

		expect(consoleLogSpy.calledOnce).to.be.true;
		expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;
	});

	it('should log the correct message and be called once for10 and 10', () => {
		sendPaymentRequestToApi(10, 10);

		expect(consoleLogSpy.calledOnce).to.be.true;
		expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;
	});
});
