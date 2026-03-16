const jwt = require("jsonwebtoken");

function setUser(user) {
  return jwt.sign(user, process.env.SECRETKEY);
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, process.env.SECRETKEY);
}

module.exports = { setUser, getUser };
