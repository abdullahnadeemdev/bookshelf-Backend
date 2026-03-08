const User = require("../models/user");
var jwt = require("jsonwebtoken");

const handleGetUser = async (req, res) => {
  try {
    const users = await User.find({});
    return res.json(users);
  } catch (err) {
    console.log("caught an error", err);
  }
};

const handleLogin = async (req, res) => {
  const body = req.body;
  try {
    const userFound = await User.findOne({ email: req.body.email });
    if (!userFound) return;
    return res.json(userFound);
  } catch (err) {
    console.log("caught an error", err);
    return res.status(400).json(err);
  }
};

const handleSignup = async (req, res) => {
  const body = req.body;
  try {
    const result = await User.create({
      name: body.name,
      email: body.email,
      password: body.password,
      petName: body.petName,
    });

    return res
      .status(201)
      .json({ msg: "User added successfully", id: result._id });
  } catch (err) {
    console.log("caught an error", err);
    return res.status(400).json(err);
  }
};

module.exports = { handleGetUser, handleSignup, handleLogin };
