// Import library
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const TodoItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Schema.Types.ObjectId,
      ref: "TodoList"
    }
  },
  { timestamps: true, versionKey: false }
);

// Define model
const TodoItem = mongoose.model("TodoItem", TodoItemSchema);

// Export model
module.exports = TodoItem;

module.exports = {
  // Insert resource to database
  // Returns the resource
  create: async (fields) => {
    return (await TodoItem.create(fields))._doc; // Executes the query and return the document instead of DocumentQuery
  },

  // Find resource with the corresponding ID
  // Returns the resource
  get: async (id) => {
    return (await TodoItem.find(id).exec())._doc; // Executes the query and return the document instead of DocumentQuery
  },
  
  

  // Find all resources
  // Return all resources
  getAll: async () => {
    return await TodoItem.find({});
  },

  // Update resource with the corresponding ID
  // Return the resource
  update: async (id, fields) => {
    return (
      await TodoItem.findOneAndUpdate(
        { _id: id },
        { $set: fields },
        { new: true }
      ).exec()
    )._doc; // Executes the query and return the document instead of DocumentQuery
  },

  // Delete resource with the corresponding ID
  // Return the resource
  delete: async (id) => {
    return await TodoItem.deleteOne({ _id: id });
  },

  // Delete all resources
  // Return the resources
  clear: async () => {
    return await TodoItem.deleteMany({});
  },
};
