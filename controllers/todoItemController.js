const TodoItem = require('../models/TodoItem');

module.exports = {
    create: async (req, res) => {
        const { title, content } = req.body;

        try {
            const todoItem = await TodoItem.create({ title, content });
            res.status(201).json({ todoItem });
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    read: async (req, res) => {
        const id = req.params.id;

        try {
            const todoItem = await TodoItem.findById(id);
            res.status(200).json({ todoItem });
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    readAll: async (req, res) => {
        try {
            const todoItems = await TodoItem.find({});
            res.status(200).json({ todoItems });
        } catch (error) {
            res.status(400).json(error.message);            
        }
    },
    update: async (req, res) => {
        const id = req.params.id;

        try {
            const todoItem = await TodoItem.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).json({ todoItem });
        } catch (error) {
            res.status(400).json(error.message);
        }
    },
    delete: async (req, res) => {
        const id = req.params.id;

        try {
            const todoItem = await TodoItem.findByIdAndDelete(id);
            res.status(200).json({ todoItem });
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}