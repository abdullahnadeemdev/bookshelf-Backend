const express = require("express");
const router = express.Router();
const {
  handleGetUser,
  handleSignup,
  handleLogin,
} = require("../controllers/user");

router.get("/", handleGetUser);
router.post("/signup", handleSignup);
router.post("/login", handleLogin);

module.exports = router;
