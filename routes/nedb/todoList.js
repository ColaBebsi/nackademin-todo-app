const router = require('express').Router();
const todoListController = require('../controllers/nedb/todoList');

router.post('/:userId', todoListController.createTodoList);

module.exports = router;