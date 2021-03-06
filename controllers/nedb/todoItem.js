const TodoItem = require('../models/nedb/TodoItem');

module.exports = {
    createTodo: async (req, res) => {
        const todoListId = req.params.todoListId;
        const { title, content, done = false } = req.body;

        try {
            const todoItem = await TodoItem.create({ title, content, done, todoListId });
            res.status(201).json({ todoItem });
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    readTodo: async (req, res) => {
        const id = req.params.id;

        try {
            const todoItem = await TodoItem.read(id);
            res.status(200).json({ todoItem });
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    readAllTodos: async (req, res) => {
        try {
            const todoItems = await TodoItem.readAll();
            res.status(200).json({ todoItems });
        } catch (error) {
            res.status(400).json(error.message);            
        }
    },
    readTodoList: async (req, res) => {
        const todoListId = req.params.todoListId;

        try {
            const todoList = await TodoItem.readList(todoListId);
            res.status(200).json(todoList);
        } catch (error) {
            res.status(400).json(error.message);            
        }
    },
    updateTodo: async (req, res) => {
        const id = req.params.id;
        const { title, content } = req.body;

        try {
            const todoItem = await TodoItem.update(id, { title, content });
            res.status(200).json({ todoItem }); 
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    deleteTodo: async (req, res) => {
        const id = req.params.id;

        try {
            const todoItem = await TodoItem.delete(id);
            res.status(200).json({ todoItem });
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    deleteAllTodos: async (req, res) => {
        try {
            const todoItems = await TodoItem.deleteAll();
            res.status(200).json({ todoItems });
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}