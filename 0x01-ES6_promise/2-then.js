function handleResponseFromAPI(promise) {
	return promise
	.then(() => {
		// Handler for resolution
		console.log('Got a response from the API');
		return { status: 200, body: 'success' };
	})
	.catch(() => {
		// Handler for rejection
		return new Error();
	});
}

export default handleResponseFromAPI;
