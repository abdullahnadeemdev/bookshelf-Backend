// function checkAuthentication(cookieName) {
//   return (req, res, next) => {
//     const tokenCookie = req.cookie[cookieName];
//     if (!tokenCookie) return next();

//     try {
//       const userPayload = getUser(tokenCookie);
//       req.user = userPayload;
//     } catch (err) {}
//     return next();
//   };
// }

// module.exports = { checkAuthentication };
