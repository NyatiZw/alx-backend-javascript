const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
	let consoleLogSpy;

	beforeEach(() => {
		if (!consoleLogSpy) {
			consoleLogSpy = sinon.spy(console);
		}
	});

	afterEach(() => {
		consoleLogSpy.log.resetHistory();
	});

	it('should log the correct message and be called once for 100 and 20', () => {
		sendPaymentRequestToApi(100, 20);
		expect(consoleLogSpy.log.calledWith('The total is: 120')).to.be.true;
		expect(consoleLogSpy.log.calledOnce).to.be.true;
	});

	it('should log the correct message and be called once for10 and 10', () => {
		sendPaymentRequestToApi(10, 10);
		expect(consoleLogSpy.log.calledWith('The total is: 20')).to.be.true;
		expect(consoleLogSpy.log.calledOnce).to.be.true;
	});
});
