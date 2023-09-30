/*eslint-disable no-underscore-dangle*/
/* Import the function from the utils.js*/
import { uploadPhoto, createUser } from './utils.js';


/* Define the handleProfileSignup function*/
export default function handleProfileSignup() {
	/* Use Promise.all to collectively resolve promises from uploadPhoto and createUser*/
	return Promise.all([uploadPhoto(), createUser()])
	.then(([photoResult, userResult]) => {
		/*Extract the relevant data from the resolved promises*/
		const { body } = photoResult;
		const { firstName, lastName } = userResult;

		/* Log the combined result to the console*/
		console.log(`${body} ${firstName} ${lastName}`);
	})
	.catch((error) => {
		/* Handle errors by logging an error message to the console*/
		console.error('Signup system offline');
	});
}
