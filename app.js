const express = require('express');
const config = require('./config');
const initExpress = require('./init/express');
const initRoutes = require('./init/routes');
const db = require('./db');

const app = express();

initExpress(app);

initRoutes(app);

db.connect(() => { app.listen(config.port, () => { console.log(`Succeeded on connecting to mongo on port: ${config.port}`) }) });
