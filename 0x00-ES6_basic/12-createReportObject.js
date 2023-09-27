// export function to return previous function
export default function createReportObject(employeesList) {
	return {
		allEmployees: { ...employeesList },
		getNumberOfDepartments(employeesList) {
			return Object.keys(employeesList).length;
		},
	};
}
