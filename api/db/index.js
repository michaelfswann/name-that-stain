const { Pool } = require("pg");

const { db } = require("../config/index");

const pool = new Pool(db);

module.exports = {
  query: (text, params) => pool.query(text, params),
};
