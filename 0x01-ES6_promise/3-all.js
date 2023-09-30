import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
	return Promise.all([uploadPhoto(), createUser()])
	.then(([photoResult, userResult]) => {
		const { body } = photoResult;
		const { firstName, lastName } = userResult;
		console.log(`${body} ${firstName} ${lastName}`);
	})
	.catch((error) => {
		console.error('Signup system offline');
	});
}
