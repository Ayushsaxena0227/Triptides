const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = async (req, res, next) => {
  // const token = req.header("Authorization")?.replace("Bearer ", "");
  const token = req.header("x-auth-token");
  console.log("Token received:", token); // Log token to check if it is being received

  if (!token) {
    console.log("No token, authorization denied");
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.user.id); // Attach user to req
    console.log("Token decoded, user:", req.user); // Log decoded token data
    next();
  } catch (err) {
    console.error("Error verifying token:", err);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
module.exports = { authMiddleware };
