const express = require("express");
const path = require("path");
const productRouter = require("./routers/product");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/product", productRouter);
app.use(express.static("public"));

app.get("/products-page", (_req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.listen(9000);

// http://localhost:9000/products-page
