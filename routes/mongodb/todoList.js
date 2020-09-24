const router = require("express").Router();
const todoListController = require("../../controllers/mongodb/todoList");
const { authenticateToken } = require('../../middlewares/auth');

router
  .route("/")
  .post(authenticateToken, todoListController.create)
  .get(todoListController.getAll);

router
  .route("/:id")
  .get(todoListController.get)
  .patch(todoListController.update);

module.exports = router;
