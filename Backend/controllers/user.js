const User = require("../models/user");
var { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

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
    const userFound = await User.findOne({
      email: body.email,
      password: body.password,
    });
    if (!userFound) return res.status(404).json({ msg: "user not found " });
    const token = setUser(userFound);
    res.cookie = ("uid", token);
    return res.json(userFound); //// this to redirect to the home page
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
      .json({ msg: "User added successfully", id: result._id }); // return to Login if user is created correctly
  } catch (err) {
    console.log("caught an error", err);
    return res.status(400).json(err);
  }
};

module.exports = { handleGetUser, handleSignup, handleLogin };
