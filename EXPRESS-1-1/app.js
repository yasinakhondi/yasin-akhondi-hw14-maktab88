const express = require("express");
const app = express();

const routerImport = require("./routes/product");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/product", routerImport);

app.listen(9000);
