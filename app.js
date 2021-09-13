const webServer = require('./src/services/webserver.js');

// const webServerConfig = require('../config/web-server.js');

async function startup() {
  console.log('Starting application');

  try {
    console.log('Initializing web server module');

    await webServer.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1); // Non-zero failure code
  }
}


startup();