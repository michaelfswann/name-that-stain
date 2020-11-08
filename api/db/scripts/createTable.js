const { query } = require("../index");

async function createStainTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS stain_table (
              stain_id SERIAL PRIMARY KEY, 
              stain_name TEXT,
              stain_type TEXT,
              stain_image TEXT,
              stain_color TEXT
              )`
  );

  console.log(`Log: created table called stain_table`);
}

createStainTable();
