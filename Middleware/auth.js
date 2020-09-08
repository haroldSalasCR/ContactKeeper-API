const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header("x-auth-token");

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied!" });
  }

  try {
    const decode = jwt.verify(token, config.get("jwtSecret"));
    req.user = decode.user;
    next();
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ msg: "Invalid token, authorization denied!" });
  }
};
