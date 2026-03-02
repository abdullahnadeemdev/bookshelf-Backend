const Author = require("../models/author");

const handleAllAuthors = async (req, res) => {
  const books = await Author.find({});
  return res.status(200).json(books);
};

const handleAddAuthors = async (req, res) => {
  const body = req.body;

  try {
    const result = await Author.insertMany(body);
    return res
      .status(201)
      .json({ msg: "added successfully", count: result.count });
  } catch (err) {
    return res.status(500).json({
      msg: "Failed to transfer authors",
      error: err.message,
    });
  }
};

module.exports = { handleAllAuthors, handleAddAuthors };
