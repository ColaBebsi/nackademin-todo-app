const router = require('express').Router();
const authController = require('../controllers/authController');
const { authenticateToken, isAdmin } = require('../middlewares/authMiddelware');


router.post('/signup', authenticateToken, isAdmin, authController.signup);
router.post('/login', authenticateToken, authController.login);

module.exports = router;