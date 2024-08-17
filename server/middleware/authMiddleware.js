const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log("Token received:", token); // Log token to check if it is being received

  if (!token) {
    console.log("No token, authorization denied");
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    console.log("Token decoded, user:", req.user); // Log decoded token data
    next();
  } catch (err) {
    console.error("Error verifying token:", err);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
module.exports = { authMiddleware };
