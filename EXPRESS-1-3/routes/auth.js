const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const data = require("../database/users-data.json");

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.post("/signup", (req, res) => {
  let newUser = req.body;
  data.push(newUser);
  fs.writeFileSync(
    path.join(__dirname, "../database/users-data.json"),
    JSON.stringify(data)
  );
  res.send(data);
});
// //

// //////LOGIN//////////

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login-page.html"));
});

router.post("/login", (req, res) => {
  let newperson = req.body.username;
  let findUsername = data.find((x) => x.username == newperson);
  let findpassword = data.find((x) => x.password == req.body.password);
  if ((!findUsername, !findpassword)) return res.send("erooooooore!");
  else res.send("ok");
});

module.exports = router;
