const express = require("express");
const {
  handleAllBooks,
  handleAddingBook,
  addAllBooks,
} = require("../controllers/books");

const router = express.Router();

router.get("/", handleAllBooks);
router.post("/", handleAddingBook);
router.post("/all", addAllBooks);

module.exports = router;
