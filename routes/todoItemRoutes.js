const router = require('express').Router();
const todoItemController = require('../controllers/todoItemController');
const { authenticateToken, isAdmin } = require('../middlewares/authMiddelware');

router.post('/', authenticateToken, todoItemController.create);
router.get('/:id', authenticateToken, todoItemController.read);
router.get('/', authenticateToken, todoItemController.readAll);
router.patch('/:id', authenticateToken, todoItemController.update);
router.delete('/:id', authenticateToken, isAdmin, todoItemController.delete);

module.exports = router;