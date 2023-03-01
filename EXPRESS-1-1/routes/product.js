const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const data = require("../database/products-data.json");

// /////// read data

router.get("/get-all-products", (req, res) => {
  res.send(data);
});

// //////findById

router.get("/get-product/:id", (req, res) => {
  //   console.log(req.params.id);
  let findById = data.find((x) => x.id == req.params.id);
  res.send(findById);
});

/////creat///////

router.post("/create-product", (req, res) => {
  let newproduct = {
    id: 31,
    title: "iPhone 15",
    price: 54999999,
    rating: 4.69999999,
    stock: 9499999999,
    brand: "Apple",
    category: "smartphones",
  };
  data.push(newproduct);

  try {
    fs.writeFileSync(
      path.join(__dirname, "../database/products-data.json"),
      JSON.stringify(data)
    );
  } catch (error) {
    console.log(error);
    return res.status(400).send("eroooooooore!");
  }

  console.log("product creat");
  res.status(200).send(data);
});

//////update//////

router.put("/update-product/:id", (req, res) => {
  let result = data.find((x) => x.id == req.params.id);
  //   console.log(req.body.title);

  //solo=> 1   /
  edit = {
    title: "teeeeeest",
    brand: "testtttt",
  };
  if (edit.title) result.title = edit.title;
  if (edit.brand) result.brand = edit.brand;

  ////// solo2 ///
  //   if (req.body.title) result.title = req.body.title;
  //   if (req.body.brand) result.brand = req.body.brand;

  try {
    fs.writeFileSync(
      path.join(__dirname, "../database/products-data.json"),
      JSON.stringify(data)
    );
  } catch (error) {
    console.log(error);
    return res.status(400).send("erooore!");
  }
  res.status(200).send(result);
});

/////////   delete/////
router.delete("/remove-product/:id", (req, res) => {
  let filter = data.filter((x) => x.id != req.params.id);
  //   console.log(filter);
  try {
    fs.writeFileSync(
      path.join(__dirname, "../database/products-data.json"),
      JSON.stringify(filter)
    );
  } catch (error) {
    console.log(error);
    return res.status(400).send("erooooooor!");
  }
  res.status(204).send("remove product");
});
module.exports = router;
