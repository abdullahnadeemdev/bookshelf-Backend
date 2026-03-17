const jwt = require("jsonwebtoken");

function setUserID(user) {
  const payload = {
    id: user._id,
    email: user.email,
    name: user.name,
  };
  return jwt.sign(payload, process.env.SECRETKEY);
}

function getUserID(token) {
  return jwt.verify(token, process.env.SECRETKEY);
}

module.exports = { setUserID, getUserID };
