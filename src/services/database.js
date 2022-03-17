const oracledb = require('oracledb');
const { config, client } = require('../config/database.js');

// if (process.platform === 'darwin') {
//     oracledb.initOracleClient({ libDir: process.env.HOME + '/Downloads/instantclient_19_8' });
// } else if (process.platform === 'win32') {
//     oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_19_8' });
// }

let instantClient = client();

console.log("instantClient=> " + instantClient);

oracledb.initOracleClient({ libDir: instantClient });

module.exports.initialize = async () => {
    await oracledb.createPool(config);
}

module.exports.close = async () => {
    await oracledb.getPool().close(0);
}

module.exports.execute = async (statement, binds = [], opts = {}) => {
    let conn;
    let result = [];

    opts.outFormat = oracledb.OBJECT;

    try {
        conn = await oracledb.getConnection();
        result = await conn.execute(statement, binds, opts);
        return (result);
    } catch (err) {
        console.error(err);
        throw (err);
    } finally {
        if (conn) {
            try {
                await conn.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}