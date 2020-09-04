const router = require('express').Router();
const todoItemController = require('../controllers/todoItemController');

router.post('/todos', todoItemController.create);
// router.get('/todos/:id', todoController.read);
// router.get('/todos', todoController.readAll);
// router.patch('/todos/:id', todoController.update);
// router.delete('/todos/:id', todoController.delete);

module.exports = router;