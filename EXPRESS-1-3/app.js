const express = require("express");
const app = express();

const router = require("./routes/auth.js");
const routerAdmin = require("./routes/admin");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", router);

app.use("/admin", routerAdmin);

app.listen(9000);
