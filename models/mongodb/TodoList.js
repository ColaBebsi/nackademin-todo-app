// Import library
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const TodoListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        type: Schema.Types.ObjectId,
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

module.exports = {
  createList: async (listObject) => {
    // try {
    //   const newList = new TodoList(listObject);
    //   const list = await newList.save();
    //   return list;
    // } catch (error) {
    //   return error;
    // }
    return (await TodoList.create(listObject))._doc;
  },
  getList: async (id) => {
    return await TodoList.findById(id);
  },
  getAllLists: async () => {
    return await TodoList.find({});
  },
  updateList: async (id, body) => {
    return await TodoList.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true }
    );
  },
  clear: async () => {
    return await TodoList.deleteMany({});
  },
};
