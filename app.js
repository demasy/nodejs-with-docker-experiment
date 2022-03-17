const webServer = require('./src/services/webserver.js');
const database = require('./src/services/database.js');

async function startup() {
  console.log('Starting application');

  try {
    console.log('Initializing database module');

    await database.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1); // Non-zero failure code
  }

  try {
    console.log('Initializing web server module');

    await webServer.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1); // Non-zero failure code
  }
}

startup();

async function shutdown(e) {
  let err = e;

  console.log('Shutting down application');

  try {
    console.log('Closing web server module');

    await webServer.close();
  } catch (e) {
    console.error(e);

    err = err || e;
  }

  try {
    console.log('Closing database module');

    await database.close();
  } catch (e) {
    console.error(e);

    err = err || e;
  }

  console.log('Exiting process');

  if (err) {
    process.exit(1); // Non-zero failure code
  } else {
    process.exit(0);
  }
}

process.once('SIGTERM', () => {
  console.log('Received SIGTERM');

  shutdown();
});

process.once('SIGINT', () => {
  console.log('Received SIGINT');

  shutdown();
});

process.once('uncaughtException', err => {
  console.log('Uncaught exception');
  console.error(err);

  shutdown(err);
});
