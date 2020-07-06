const Pool = require('pg').Pool

const pool = new Pool({
    user : 'gauri',
    host : 'localhost',
    database : 'gauri',
    password : 'g',
    port : 5432,
});

// var db = pool.('person',pool);
module.exports = {pool}
