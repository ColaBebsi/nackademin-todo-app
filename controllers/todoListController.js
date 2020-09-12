const TodoList = require('../models/TodoList');

const create = async (req, res) => {
    const title = req.body.title;
    const userId = req.params.userId;

    try {
        const todoList = await TodoList.create({ title, userId });
        res.status(201).send({ todoList });
    } catch (error) {
        res.status(400).send(error);        
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
    create, 
    read,
    readAll,
    update,
    deleteList
};