const router = require('express').Router();
const todoItemController = require('../controllers/todoItemController');

router.post('/todos', todoItemController.create);
router.get('/todos/:id', todoItemController.read);
router.get('/todos', todoItemController.readAll);
router.patch('/todos/:id', todoItemController.update);
router.delete('/todos/:id', todoItemController.delete);

module.exports = router;