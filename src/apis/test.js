const oracledb = require('oracledb');
const database = require('../services/database.js');

const baseQuery =
    `SELECT TO_CHAR(CURRENT_DATE, 'DD-Mon-YYYY HH24:MI') AS today FROM DUAL`;

module.exports.find = async (context) => {
    let query = baseQuery;
    const binds = {};
    const result = await database.execute(query, binds);
    return result.rows;
}