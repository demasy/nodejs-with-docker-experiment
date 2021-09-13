const test = require('../apis/test.js');

async function get(req, res, next) {

    try {
        const context = {};
        const rows = await test.find(context);

        if (rows.length === 1) {
            res.status(200).json(rows[0]);
        } else {
            res.status(404).end();
        }
    } catch (err) {
        next(err);
    }
}

module.exports.get = get;
