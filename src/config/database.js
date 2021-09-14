const oracledb = require('oracledb');

module.exports.config = {
    user: process.env.DEMASY_DATABASE_USER || 'demasy',
    password: process.env.DEMASY_DATABASE_PASSWORD || 'demasy',
    connectString: process.env.DEMASY_DATABASE_CONNECT_STRING || 'localhost:1521/ORCLCDB.localdomain',
    poolMin: process.env.DEMASY_DATABASE_POOL_MIN || 5,
    poolMax: process.env.DEMASY_DATABASE_POOL_MAX || 5,
    poolIncrement: process.env.DEMASY_DATABASE_POOL_INCREMENT || 0
};