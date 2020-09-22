// Import Router method
const router = require("express").Router();
const todoItemController = require("../../controllers/mongodb/todoItem");

// POST
router.post("/:owner", todoItemController.createTodoItem);

// GET
router.get("/:id", todoItemController.getTodoItem);
router.get("/", todoItemController.getAllTodoItems);

// PATCH
router.patch("/:id", todoItemController.updateTodoItem);

// DELETE
router.delete("/:id", todoItemController.deleteTodoItem);
router.delete("/", todoItemController.deleteAllTodoItems);

module.exports = router;
