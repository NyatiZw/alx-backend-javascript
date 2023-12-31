export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const randomValue = Math.random();

			if (randomValue < 0.7) {
				resolve({ data: 'Success' });
			} else {
				reject(new Error('Error'));
			}
		}, 1000);
	});
}
