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
    }
}