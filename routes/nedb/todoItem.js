const router = require('express').Router();
const todoItemController = require('../controllers/nedb/todoItem');
const { authenticateToken, isAdmin } = require('../middlewares/auth');

router.post('/:todoListId',  todoItemController.createTodo);
router.get('/:id',  todoItemController.readTodo);
router.get('/', isAdmin, todoItemController.readAllTodos);
router.get('/todoList/:todoListId',  todoItemController.readTodoList);
router.patch('/:id',  todoItemController.updateTodo);
router.delete('/:id',  todoItemController.deleteTodo);
router.delete('/',  todoItemController.deleteAllTodos);

module.exports = router;