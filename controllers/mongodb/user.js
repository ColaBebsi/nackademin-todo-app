// Import libraries and User Model
require("dotenv").config();
const User = require("../../models/mongodb/User");

const createUser = async (req, res) => {
  try {
    const user = await User.signup(req.body);

    res.status(201).json({ message: "User Created", user });
  } catch (error) {
    console.log(error);
    res.send(400).json(error.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    res.status(201).json({ message: "User Logged In", user });
  } catch (error) {
    res.send(400).json(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.status(201).json(users);
    console.log(req.user);
  } catch (error) {
    res.send(400).json(error.message);
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    const users = await User.clear();
    res.status(201).json(users);
  } catch (error) {
    res.send(400).json(error.message);
  }
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  deleteAllUsers,
};
