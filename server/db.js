const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password: "Vijay1457@",
    host:"localhost",
    port:5432,
    database: "warehouse"
});

module.exports = pool;