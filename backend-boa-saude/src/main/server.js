const app  = require("./config/app");
const env = require('./config/env');
const port = process.argv[2] || env.port || 3000;

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}/api/`)
})