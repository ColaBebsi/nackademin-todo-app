const TodoList = require("../../models/mongodb/TodoList");
const User = require("../../models/mongodb/User");

module.exports = {
  create: async (req, res) => {
    try {
      const listObject = {
        title: req.body.title,
        user: req.user._id,
      };

      // Create list
      const list = await TodoList.createList(listObject);
      
      // Find user id from header jwt
      const user = await User.get(req.user._id);
      
      // Assign user as list user property
      list.user = user;

      // Push list to user lists array
      user.lists.push(list);
      res.status(201).json(list);
    } catch (error) {
      console.log(error);
      res.status(400).json(error.message);
    }
  },
  get: async (req, res) => {
    try {
      const list = await TodoList.getList(req.params.id);
      res.status(200).json(list);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  getAll: async (req, res) => {
    try {
      const list = await TodoList.getAllLists();
      res.status(200).json(list);
    } catch (error) {
      console.log(error);
      res.status(400).json(error.message);
    }
  },
  update: async (req, res) => {
    try {
      const list = await TodoList.updateList(req.params.id, req.body);
      res.status(200).json(list);
    } catch (error) {
      console.log(error);
      res.status(400).json(error.message);
    }
  },
};
