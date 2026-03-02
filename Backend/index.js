const express = require("express");
const app = express();
PORT = 8000;
const mongoose = require("mongoose");
const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/author");
const { connectDB } = require("./connection");
const cors = require("cors");

connectDB("mongodb://localhost:27017/BookshelfDb")
  .then(() => console.log("Connected to mongoDb"))
  .catch((err) => console.log("database not available", err));

app.use(express.json());
app.use(cors());
app.use("/images", express.static("public/images"));

app.use("/products/books", bookRoutes);
app.use("/author", authorRoutes);

app.listen(PORT, (req, res) => {
  console.log("I am connected at ", PORT);
});
