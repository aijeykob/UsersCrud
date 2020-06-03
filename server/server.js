const app = require('./app');
let config = require('./config');
app.listen(config.port, () => console.log(`Server listening on port ${config.port} `));