const Books = require("../models/books");

const handleAllBooks = async (req, res) => {
  const bookData = await Books.find({});
  return res.json(bookData);
};

const handleAddingBook = async (req, res) => {
  const body = req.body;
  try {
    const result = await Books.create({
      title: body.title,
      author: body.author,
      price: body.price,
      saleP: body.saleP,
      type: body.type,
      publishDate: body.publishDate,
      language: body.language,
      readTime: body.readTime,
      cover: body.cover,
      publisher: body.publisher,
      comments: body.comments,
      reviewNum: body.reviewNum,
      peopleReviewed: body.peopleReviewed,
      pages: body.pages,
    });

    return res
      .status(201)
      .json({ msg: "Book added to DB successfully", id: result._id });
  } catch (err) {
    return res
      .status(400)
      .json({ msg: "Failed to add book", error: err.message });
  }
};

const addAllBooks = async (req, res) => {
  const allBooks = req.body; // Expecting an array here

  // 1. Validation: Ensure we actually received an array
  if (!Array.isArray(allBooks)) {
    return res.status(400).json({ msg: "Data must be an array of books" });
  }

  try {
    // 2. Bulk Insert: This sends all books to MongoDB in a single command
    const result = await Books.insertMany(allBooks);

    return res.status(201).json({
      msg: "All books transferred successfully",
      count: result.length,
    });
  } catch (err) {
    return res.status(500).json({
      msg: "Failed to transfer books",
      error: err.message,
    });
  }
};

module.exports = { handleAllBooks, handleAddingBook, addAllBooks };
