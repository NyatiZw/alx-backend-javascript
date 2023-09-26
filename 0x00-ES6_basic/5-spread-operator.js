// Export a function that concatenates arrays and a string
export default function concatArrays(array1, array2, string) {
	// Use spread syntax to concatenate the arrays and characters
	return [...array1, ...array2, ...string.split('')];
}
