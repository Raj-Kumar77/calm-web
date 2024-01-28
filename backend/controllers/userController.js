const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helpers/authHelper");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already registered");
  }

  const hashedPassword = await hashPassword(password);
  const newUser = await new User({
    name,
    email,
    password: hashedPassword,
  }).save();
  if (newUser) {
    res.status(200).send({
      message: "Registration successful",
      newUser,
    });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    res.status(400);
    throw new Error("Email not registered");
  }

  const checkPassword = await comparePassword(password, existingUser.password);
  if (!checkPassword) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ _id: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.status(200).send({
    message: "Login successful",
    user: {
      name: existingUser.name,
      email: existingUser.email,
      password: existingUser.password,
    },
    token,
  });
});

module.exports = { registerUser, loginUser };
