const express = require("express");
const {
  handleAllBooks,
  handleAddingBook,
  addAllBooks,
} = require("../controllers/books");
const router = express.Router();

router.post("/", handleAddingBook);
router.post("/all", addAllBooks);

router.get("/", handleAllBooks);

module.exports = router;
