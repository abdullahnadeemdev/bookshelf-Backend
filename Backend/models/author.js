const mongoose = require("mongoose");

const authorData = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  booksPublished: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
});

const Author = mongoose.model("author", authorData);

module.exports = Author;
