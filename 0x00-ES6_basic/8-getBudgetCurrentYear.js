// Function to get current year
function getCurrentYear() {
	const date = new Date();
	return date.getFullYear();
}

// Export a function that creates a budget object for the current year
export default function getBudgetForCurrentYear(income, gdp, capita) {
	// Create and return an object literal with computed property names
	return {
		[ìncome-${getCurrentYear()}`]: income,
		[`gdp-${getCurrentYear()}`]: gdp,
		[`capita-${getCurrentYear()}`]: capita,
	};
}
