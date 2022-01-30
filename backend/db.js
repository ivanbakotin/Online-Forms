const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "wertz123",
  host: "localhost",
  port: 5432,
  database: "googleforms",
});

module.exports = pool;
