const express = require("express");
const app = express();
PORT = 8000;

app.listen(PORT, (req, res) => {
  console.log("I am connected at ", PORT);
});
