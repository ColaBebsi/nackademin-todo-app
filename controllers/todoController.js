const todoModel = require('../models/todoModel');


function create(req, res) {
    let todo = new todoModel({
        title: req.body.title,
        done: req.body.done
    });

    todo.save((err) => {
        if (err) return next(err);
        res.send('Todo created successfully!');
    });
}

async function findAll(req, res, next) {
    try {
        const getAllTodos = await todoModel.find({});
        // console.log(res)
        res.send(getAllTodos);
    } catch (error) {
        next({ status: 400, message: "Failed to get all todos!" })
    }
}

function findById(req, res) {
    todoModel.findById(req.params.id, (err, todo) => {
        if (err) return next(err);
        res.send(todo);
    });
}

function findByIdAndUpdate(req, res) {
    todoModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, todo) => {
        if (err) return next(err);
        res.send('Todo updated!');
    });
}

function findByIdAndRemove(req, res) {
    todoModel.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
}

module.exports = { create, findAll, findById, findByIdAndUpdate, findByIdAndRemove };