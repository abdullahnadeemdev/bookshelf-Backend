const express = require("express");
const app = express();
PORT = 8000;
const mongoose = require("mongoose");
const bookRoutes = require("./routes/books");
const { connectDB } = require("./connection");

connectDB("mongodb://localhost:27017/BookshelfDb")
  .then(() => console.log("Connected to mongoDb"))
  .catch((err) => console.log("database not available", err));
app.use(express.json());
app.use("/products/books", bookRoutes);

app.listen(PORT, (req, res) => {
  console.log("I am connected at ", PORT);
});
