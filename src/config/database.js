const oracledb = require('oracledb');

module.exports.config = {
    user: process.env.database_user || 'sys',
    password: process.env.database_password || 'Oradoc_db1',
    connectString: process.env.database_connect_string || 'localhost:1521/ORCLCDB.localdomain',
    poolMin: process.env.database_pool_min || 5,
    poolMax: process.env.database_pool_max || 5,
    poolIncrement: process.env.database_pool_increment || 0,
    poolAlias: process.env.database_pool_alias || "demasy"
};

module.exports.sysConfig = {
    user: process.env.database_user || 'sys',
    password: process.env.database_password || 'Oradoc_db1',
    connectString: process.env.database_connect_string || 'localhost:1521/ORCLCDB.localdomain',
    privilege: process.env.privilege || oracledb.SYSDBA
};