const router = require('express').Router();
const todoItemController = require('../controllers/todoItemController');
const { authenticateToken, isAdmin } = require('../middlewares/authMiddelware');

router.post('/',  todoItemController.createTodo);
router.get('/:id',  todoItemController.readTodo);
router.get('/', isAdmin, todoItemController.readAllTodos);
router.patch('/:id',  todoItemController.updateTodo);
router.delete('/:id',  todoItemController.deleteTodo);
router.delete('/',  todoItemController.deleteAllTodos);

module.exports = router;