// Import library
const mongoose = require("mongoose");

// Create schema
const TodoListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    todoItems: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "TodoItem",
        },
      ],
  },
  { timestamps: true, versionKey: false }
);

// Define model
const TodoList = mongoose.model("TodoList", TodoListSchema);

// Export model
module.exports = TodoList;
