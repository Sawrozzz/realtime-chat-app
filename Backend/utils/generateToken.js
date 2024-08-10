import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });

  res.cookie("jwt", token, {
    maxAge: 20 * 24 * 60 * 60 * 1000, // in miliseconds its 20days
    httpOnly: true, // cookie cannot be accessed by client side script
    sameSite: "strict",
    secure : process.env.NODE_ENV === "production" ,
  });
};

export default generateToken;