// require necessary modules & files
//const express = require("express");
const { query } = require("../index");

async function getAllStains() {
  const result = await query("SELECT * FROM stain_table;");
  console.log("getting stains");
  return result.rows;
}

async function addStain(stain) {
  const res = await query(
    "INSERT INTO stain_table (stain_name, stain_type, stain_image, stain_color) VALUES ($1, $2, $3, $4) RETURNING stain_name;",
    [stain.name, stain.type, stain.image, stain.color]
  );
  console.log(`added new stain: ${res.rows[0].stain_name}`);
  return res.rows[0].stain_name;
}

module.exports = {
  getAllStains,
  addStain,
};
