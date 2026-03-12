const express = require("express");
const { handleAllAuthors, handleAddAuthors } = require("../controllers/author");

const router = express.Router();

router.get("/", handleAllAuthors);
router.post("/add", handleAddAuthors);

module.exports = router;
