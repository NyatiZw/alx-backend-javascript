// export function to module
export default function getBudgetObject(income, gdp, capita) {
	// Using shorthand property notation to create the object
	const budget = {
		income,
		gdp,
		capita,
	};

	return budget;
}
