const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
let config = require('./config');
const app = express();
mongoose.connect(config.db, {useNewUrlParser: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const cors = require('cors');
app.use(cors());

app.use('/', routes);

app.listen(config.port, () => console.log(`Server listening on port ${config.port} `));