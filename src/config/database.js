const oracledb = require('oracledb');

module.exports.config = {
    user: process.env.DEMASY_DATABASE_USER || 'demasy',
    password: process.env.DEMASY_DATABASE_PASSWORD || 'demasy',
    connectString: process.env.DEMASY_DATABASE_CONNECT_STRING || 'localhost:1521/ORCLCDB.localdomain',
    poolMin: process.env.DEMASY_DATABASE_POOL_MIN || 5,
    poolMax: process.env.DEMASY_DATABASE_POOL_MAX || 5,
    poolIncrement: process.env.DEMASY_DATABASE_POOL_INCREMENT || 0
};

module.exports.client = () => {
    let instantclient = null;
    if (process.platform === 'darwin') {
        instantclient = process.env.DEMASY_DATABASE_CLIENT || (process.env.HOME + '/Downloads/instantclient_19_8')
    } else if (process.platform === 'win32') {
        instantclient = process.env.DEMASY_DATABASE_CLIENT || 'C:\\oracle\\instantclient_19_8';
    } else if (process.platform === 'linux') {
        instantclient = process.env.DEMASY_DATABASE_CLIENT;
    }

    console.log('process.platform => ' + process.platform);
    instantclient = process.env.DEMASY_DATABASE_CLIENT;
    return instantclient;
};
