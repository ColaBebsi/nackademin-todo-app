// Import library and User controller
const router = require("express").Router();
const userController = require("../../controllers/mongodb/user");

// POST
router.post("/signup", userController.createUser);
router.post("/login", userController.loginUser);

// GET
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getTodoItems);

// DELETE
router.delete("/", userController.deleteAllUsers);

module.exports = router;
