const router = require('express').Router();
const todoController = require('../controllers/todoController');

router.post('/create', todoController.create);
router.get('/findAll', todoController.findAll);
router.get('/:id', todoController.findById);
router.patch('/update/:id', todoController.findByIdAndUpdate);
router.delete('/delete/:id', todoController.findByIdAndRemove);

module.exports = router;