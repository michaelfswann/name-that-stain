const { query } = require("../index");

async function dropStainTable() {
  await query(`DROP TABLE stain_table`);

  console.log(`The table has been dropped`);
}

dropStainTable();
