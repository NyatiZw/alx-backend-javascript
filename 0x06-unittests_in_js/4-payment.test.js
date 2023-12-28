const { expect } = require('chai');
const sinon = require('sinon');
const sendPAymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
	it('calls console.log with correct arguments', () => {
		const consoleLogSpy = sinon.spy(console);
		const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

		calculateNumberStub.returns(10);
		sendPaymentRequestToApi(100, 20);
		expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
		expect(calculateNumberStub.callCount).to.be.equal(1);
		expect(consoleLogSpy.log.calledWith('The total is: 10')).to.be.true;
		expect(consoleLogSpy.log.callCount).to.be.equal(1);
		calculateNumberStub.restore();
		consoleLogSpy.log.restore();
	});
});
