const express = require("express");
const {
  handleAllBooks,
  handleAddingBook,
  addAllBooks,
  deleteAll,
} = require("../controllers/books");

const router = express.Router();

router.get("/", handleAllBooks);
router.post("/", handleAddingBook);
router.post("/all", addAllBooks);
router.delete("/delt", deleteAll);

module.exports = router;
