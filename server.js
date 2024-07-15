const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("mongoose");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

connectDB();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
