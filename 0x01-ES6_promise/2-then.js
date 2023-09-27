export default function handleResponseFromAPI(promise) {
	return promise
	.then((response) => {
		// Check the condition and resolve or reject accordingly
		if (response.success) {
			console.log('Got a response from the API');
			return Promise.resolve({ status: 200, body: 'success' });
		} else {
			return Promise.reject(new Error());
		}
	})
			.catch((error) => {
				console.error('Error:', error.message);
				return new Error();
			});
}
