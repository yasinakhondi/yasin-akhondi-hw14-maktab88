const express = require("express");
const router = express.Router();
const data = require("../database/users-data.json");
const fs = require("fs");
const path = require("path");

router.get("/get-all-users", (req, res) => {
  res.send(data);
});

router.get("/get-user/:username", (req, res) => {
  let find = data.find((x) => x.username == req.params.username);

  if (!find) return res.send("not find userName");
  else res.send(find);
});

router.delete("/remove-user/:username", (req, res) => {
  let delperson = data.filter(
    (person) => person.username != req.params.username
  );
  try {
    fs.writeFileSync(
      path.join(__dirname, "../database/users-data.json"),
      JSON.stringify(delperson)
    );
  } catch (error) {
    console.log(error);
    return res.status(400).send("err");
  }
  res.status(200).send(data);
});

module.exports = router;
