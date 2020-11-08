var express = require("express");
var router = express.Router();

const { getAllStains, addStain } = require("../db/models/index");

// const asyncMiddleware = (fn) => (req, res, next) => {
//   Promise.resolve(fn(req, res, next)).catch(next);
// };

/* GET a stain. */
router.get("/stain", async function (req, res, next) {
  console.log("reached line 14");
  let data = await getAllStains();
  console.log("reached line 16");
  res.send(data);
});

router.post("/stain", async function (req, res) {
  const data = req.body;
  const result = await addStain(data);
  console.log(`success: true, message: new entry with a name of ${result}`);
  res.json({ success: true, message: `new stain added: ${result}` });
});

module.exports = router;
