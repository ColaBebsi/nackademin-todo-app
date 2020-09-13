const router = require('express').Router();
const userController = require('../controllers/userController');
const { isAdmin } = require('../middlewares/authMiddelware');

router.post('/signup', isAdmin, userController.signup);
router.post('/login', userController.login);
router.get('/:id', isAdmin, userController.readUser);
router.delete('/:id', isAdmin, userController.deleteUser);

module.exports = router;