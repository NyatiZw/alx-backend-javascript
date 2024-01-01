const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
	it('calls console.log with correct arguments', () => {
		const consoleLogSpy = sinon.spy(console);
		const dummy = sinon.stub(Utils, 'calculateNumber');

		dummy.returns(10);
		sendPaymentRequestToApi(100, 20);

		expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
		expect(dummy.callCount).to.be.equal(1);
		expect(consoleLogSpy.log.calledWith('The total is: 10')).to.be.true;
		expect(consoleLogSpy.log.callCount).to.be.equal(1);
		dummy.restore();
		consoleLogSpy.log.restore();
	});
});
