import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "You need to login first" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await User.findById(verifyToken.userId).select("-password");

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;
