const connectDB = require("./db/db");
const express = require("express");
const router = require("./routes/empRoute");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/", router);

app.listen(4000, () => {
  console.log("running");
});
