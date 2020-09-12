const router = require('express').Router();
const todoListController = require('../controllers/todoListController');

router.post('/:userId', todoListController.create);

module.exports = router;