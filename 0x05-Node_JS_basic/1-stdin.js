/**
 * Function to get user input from the standard input.
 * @returns {Promise<string>} A promise that resolves to the user input.
 */
function getUserInput() {
	return new Promise((resolve) => {
		const readline = require('readline');
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
			rl.close();
			resolve(answer);
		});
	});
}

/**
 * Main program that interacts with user through stdin and stdout
 */
async function main() {
	try {
		const userName = await getUserInput();
		console.log(`Your name is: ${userName}`);
		console.log('This important software is now closing');
	} catch (error) {
		console.error('An error occurred:', error.message);
	}
}

// Execute main


main();
