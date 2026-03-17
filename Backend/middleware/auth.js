// const jwt = require("jsonwebtoken");

// function setUser(user) {
//   return jwt.sign(user, process.env.SECRETKEY);
// }

// function getUser(token) {
//   if (!token) return null;
//   return jwt.verify(token, process.env.SECRETKEY);
// }

// module.exports = { setUser, getUser };

const { getUser } = require("../service/auth");

async function restrictToLoginUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) return res.json({ msg: "no login cookie" });
  const user = getUser(userUid);

  if (!user) return res.json({ msg: "no login cookie" });

  req.user = user;
  next();
}

module.exports = { restrictToLoginUserOnly };
