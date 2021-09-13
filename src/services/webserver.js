const http = require('http');
const express = require('express');
const webServerConfig = require('../config/webserver.js');

let httpServer;

function initialize() {
    return new Promise((resolve, reject) => {
        const app = express();
        httpServer = http.createServer(app);

        app.get('/', (req, res) => {
            res.end('Hello World!');
        });

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