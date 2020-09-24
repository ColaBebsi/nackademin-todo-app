// Import library and User controller
const router = require("express").Router();
const userController = require("../../controllers/mongodb/user");
const { authenticateToken, isAdmin } = require('../../middlewares/auth');

// POST
router.post("/signup", userController.createUser);
router.post("/login", userController.loginUser);

// GET
router.get("/", authenticateToken, isAdmin, userController.getAllUsers);

// DELETE
router.delete("/", authenticateToken, isAdmin, userController.deleteAllUsers);

module.exports = router;


