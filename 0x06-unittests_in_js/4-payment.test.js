const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
	it('calls console.log with correct arguments', () => {
		const consoleLogSpy = sinon.spy(console);
		const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');

		calculateNumberStub.returns(10);
		sendPaymentRequestToApi(100, 20);

		expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
		expect(calculateNumberStub.callCount).to.be.equal(1);

		expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
		expect(consoleLogSpy.callCount).to.be.equal(1);

		calculateNumberStub.restore();
		consoleLogSpy.restore();
	});
});
