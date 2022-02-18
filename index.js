// start your server here
require('dotenv').config();
const server = require('./api/server');

const port = process.env.PORT || 9000;

server.listen(port, () => {
    console.log(`All systems Go on port: ${port}`);
});