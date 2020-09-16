const TodoList = require('../models/TodoList');

const createTodoList = async (req, res) => {
    const title = req.body.title;
    const userId = req.params.userId;

    try {
        const todoList = await TodoList.create( title, userId );
        res.status(201).json(todoList);
    } catch (error) {
        res.status(400).json(error.message);        
    }

}

const read = (req, res) => {

}

const readAll = (req, res) => {

}

const update = (req, res) => {

}

async function deleteList(req, res) {

}

module.exports = { 
    createTodoList, 
    read,
    readAll,
    update,
    deleteList
};