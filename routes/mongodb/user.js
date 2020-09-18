const router = require('express').Router();
const userController = require('../../controllers/mongodb/user');

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);

router.get('/', userController.getAllUsers);

router.delete('/', userController.deleteAllUsers);

module.exports = router;