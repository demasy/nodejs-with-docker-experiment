const http = require('http');
const express = require('express');
const webServerConfig = require('../config/webserver.js');
const router = require('./router.js');

let httpServer;

function initialize() {
    return new Promise((resolve, reject) => {
        const app = express();
        httpServer = http.createServer(app);

        app.use(express.json({
            reviver: reviveJson
        }));

        app.use('/demasy/api', router);

        httpServer.listen(webServerConfig.port, err => {
            if (err) {
                reject(err);
                return;
            }
            console.log(`Web server listening on localhost:${webServerConfig.port}`);
            resolve();
        });
    });
}

module.exports.initialize = initialize;


module.exports.close = () => {
    return new Promise((resolve, reject) => {
        httpServer.close((err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

const iso8601RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

function reviveJson(key, value) {
  // revive ISO 8601 date strings to instances of Date
  if (typeof value === 'string' && iso8601RegExp.test(value)) {
    return new Date(value);
  } else {
    return value;
  }
}