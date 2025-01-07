const jwt = require("jsonwebtoken");
const User = require("../models/Users");

// Protect Middleware
const protect = async (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalid" });
  }
};

// Admin Middleware
const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin Privileges Required" });
  }

  next();
};

module.exports = { isAdmin, protect };
