//4-pricing.js
import Currency from './3-currency.js';

export default class Pricing {
	constructor(amount, currency) {
		this._amount = amount;
		this._currency = currency;
	}

	get amount() {
		return this._amount;
	}


	set amount(newAmount) {
		if (typeof newAmount === 'number') {
			this._amount = newAmount;
		}
	}

	get currency() {
		return this._currency;
	}


	set currency(newCurrency) {
		if (typeof newCurrency === 'string') {
			this._currency = newCurrency;
		}
	}

	displayFullPrice() {
		console.log(`${this._amount} ${this._currency}`);
	}

	static convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}
