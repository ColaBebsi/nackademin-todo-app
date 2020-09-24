const TodoItem = require("../../models/mongodb/TodoItem");
const TodoList = require("../../models/mongodb/TodoList");

module.exports = {
  createTodoItem: async (req, res) => {
    try {
      // Create todoItem 
      const todoItem = await TodoItem.create(req.body);

      // Find todoList 
      const todoList = await TodoList.getList(req.params.listId)

      // Assign todoList as a todoItem list 
      todoItem.list = todoList;
      
      // Add todoItem to the todoList items array 
      todoList.items.push(todoItem);

      // Save todoList 
      await todoList.save();
      res.status(201).json(todoItem);
    } catch (error) {
      res.status(400).json(error.message)
    }
  },
  getTodoItem: async (req, res) => {
    const id = req.params.id;

    try {
      const todoItem = await TodoItem.get(id);
      console.log(todoItem);
      res.status(200).json({ message: "Todo Item Found", todoItem });
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  getAllTodoItems: async (req, res) => {
    try {
      const todoItems = await TodoItem.getAll();
      res.status(200).json({ message: "All Todo Items Found", todoItems });
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  updateTodoItem: async (req, res) => {
    const id = req.params.id;
    const fields = req.body;

    try {
      const todoItem = await TodoItem.update(id, fields);
      res.status(200).json({ message: "Todo Item Updated", todoItem });
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  deleteTodoItem: async (req, res) => {
    const id = req.params.id;

    try {
      const todoItem = await TodoItem.delete(id);
      res.status(200).json({ message: "Todo Item Deleted", todoItem });
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
  deleteAllTodoItems: async (req, res) => {
    try {
      const todoItems = await TodoItem.clear();
      res.status(200).json({ message: "All Todo Items Deleted!", todoItems });
    } catch (error) {
      console.log(error);
      res.status(400).json(error.message);
    }
  },
};
