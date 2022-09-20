const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/product", (req, res) => {
  res.send("This is product route");
});
app.get("/product/details", (req, res) => {
  res.send("This is product details route");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
