const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
PORT = process.env.PORT || 8000;
// const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { checkAuthentication } = require("./middleware/authentication");

const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/author");
const userRoutes = require("./routes/user");

const { connectDB } = require("./connection");
const cors = require("cors");

connectDB(process.env.MONGODB_URL)
  .then(() => console.log("Connected to mongoDb"))
  .catch((err) => console.log("database not available", err));

app.use(express.json());
app.use(cookieParser());
app.use(checkAuthentication("token"));
app.use(cors());
app.use("/images", express.static("public/images"));

app.use("/products/books", bookRoutes);
app.use("/author", authorRoutes);
app.use("/user", userRoutes);

app.listen(PORT, (req, res) => {
  console.log("I am connected at ", PORT);
});
