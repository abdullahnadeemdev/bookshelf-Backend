const mongoose = require("mongoose");

const booksData = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  saleP: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  publishDate: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  readTime: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  comments: {
    type: Number,
  },
  reviewNum: {
    type: Number,
  },
  peopleReviewed: {
    type: Number,
  },
  pages: {
    type: Number,
    required: true,
  },
});
// this defines the type of data in our books database

const Books = mongoose.model("books", booksData);

module.exports = Books;
