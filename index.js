const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const mongoose = require("mongoose");
const Product = require("./model/Product");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// database connection
mongoose
  .connect(process.env.DATABASE_ATLAS)
  .then(() => {
    console.log(`Database connection is successfully`);
  })
  .catch((error) => {
    console.log("no connection");
  });

async function run() {
  try {
    app.get("/allProduct", async (req, res, next) => {
      try {
        const result = await Product.find({});

        res.status(400).json({
          successful: true,
          message: "data successfully get",
          data: result,
        });
      } catch (error) {
        res.status(400).json({
          successful: false,
          message: "data is not a get",
        });
      }
    });

    app.post("/addProduct", async (req, res) => {
      try {
        console.log(req.body);
        const result = await Product.create(req.body);
        res.send(result);
      } catch (error) {
        res.status(400).json({
          status: "Fail",
          message: "Can't get the data",
          error: error.message,
        });
      }
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/product", (req, res) => {
  res.send("Hello product");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
