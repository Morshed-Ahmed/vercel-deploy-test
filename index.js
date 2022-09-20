const express = require("express");
const app = express();
const port = 5050;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/product", (req, res) => {
  res.send("This is product route");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
