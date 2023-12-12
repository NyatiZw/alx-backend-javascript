const { expect } = require('chai');
const sinon = require('sinon');
const { sendPAymentRequestToApi } = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
	it('should call Utils.calculateNumber with correct arguments and log the correct message', () => {
		const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
		const consoleLogSpy = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20);

		expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;
		expect(consoleLogSpy.calledWithExactly('The total is: 10')).to.be.true;

		calculateNumberStub.restore();
		consoleLogSpy.restore();
	});
});
