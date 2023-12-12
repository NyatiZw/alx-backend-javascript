const { expect } = require('chai');
const sinon = require('sinon');
const { sendPaymentRequestToApi } = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
	it('should call Utils.calculateNumber with correct arguments', () => {
		const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

		sendPaymentRequestToApi(100, 20);

		expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;


		calculateNumberSpy.restore();
	});
});
