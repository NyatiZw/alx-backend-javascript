const express = require('express');
const routes = require('./routes');

const app = express();

// Use the routes defined in index.js
app.use('/', routes);

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
	console.log(`Server is running and listening on port ${PORT}`);
});

// Export the express app
export default app;
