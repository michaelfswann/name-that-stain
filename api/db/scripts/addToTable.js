const { query } = require("../index");

async function addStain(stain) {
  const res = await query(
    "INSERT INTO stain_table (stain_name, stain_type, stain_image, stain_color) VALUES ($1, $2, $3, $4) RETURNING stain_name;",
    [stain.name, stain.type, stain.image, stain.color]
  );
  console.log(`added new stain: ${res.rows[0].stain_name}`);
  return res.rows[0].stain_name;
}

const newStain = {
  name: "blood",
  type: "biological",
  image:
    "https://i.pinimg.com/originals/1a/dc/10/1adc104f290f93f2330ebed2bf536972.jpg",
  color: "red",
};

addStain(newStain);
