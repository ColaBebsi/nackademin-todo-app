// Import libraries and User Model
require("dotenv").config();
const User = require("../../models/mongodb/User");
const jwt = require("jsonwebtoken");

// Create a jwt
function generateAccessToken(id, role) {
  return jwt.sign({ id, role }, process.env.JWT_SECRET);
}

const createUser = async (req, res) => {
  try {
    const user = await User.signup(req.body);
    const accessToken = generateAccessToken(user._id, user.role);

    res.status(201).json({ message: "User Created", user, accessToken });
  } catch (error) {
    res.send(400).json(error.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const accessToken = generateAccessToken(user._id, user.role);

    res.status(201).json({ message: "User Logged In", user, accessToken });
  } catch (error) {
    res.send(400).json(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.status(201).json(users);
  } catch (error) {
    res.send(400).json(error.message);
  }
};

const getTodoItems = async (req, res) => {
  try {
    const id = req.params.id;

    const todoItems = await User.getItems(id);
    res.status(201).json(todoItems);
  } catch (error) {
    res.send(400).json(error.message);
  }
}

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
  getTodoItems,
  deleteAllUsers,
};
