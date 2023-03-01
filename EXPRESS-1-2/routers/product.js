const express = require("express");
const router = express.Router();
const products = require("../db/products-data.json");

//read all products

router.get("/get-all-products", (_req, res) => {
  return res.json(products);
});

module.exports = router;
