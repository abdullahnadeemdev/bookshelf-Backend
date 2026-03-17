const jwt = require("jsonwebtoken");

function setUserID(user) {
  return jwt.sign(user, process.env.SECRETKEY);
}

function getUserID(token) {
  return jwt.verify(token, process.env.SECRETKEY);
}

module.exports = { setUserID, getUserID };
