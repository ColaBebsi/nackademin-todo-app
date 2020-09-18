// Import library
const mongoose = require('mongoose');

// Create schema  
const TodoItemSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true
    },
    content: { 
        type: String, 
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }, 
}, { timestamps: true });

// Define model
const TodoItem = mongoose.model('TodoItem', TodoItemSchema);

// Export model
module.exports = TodoItem;

module.exports = {

    // Insert resource to database
    // Returns the resource 
    create: async (fields) => {
        const { title, content, done } = fields;
        return (await TodoItem.create({ title, content, done }))._doc;  // Executes the query and return the document instead of DocumentQuery
    }, 

    // Find resource with the corresponding ID
    // Returns the resource
    get: async (id) => {
        return (await TodoItem.findById(id).exec())._doc;   // Executes the query and return the document instead of DocumentQuery
    },

    // Find all resources
    // Return all resources
    getAll: async () => {
        return await TodoItem.find({});
    },

    // Update resource with the corresponding ID
    // Return the resource
    update: async (id, fields) => {
        return (await TodoItem.findOneAndUpdate({ _id: id}, { $set: fields }, {new: true}).exec())._doc;    // Executes the query and return the document instead of DocumentQuery
    },
    
    // Delete resource with the corresponding ID
    // Return the resource
    delete: async (id) => {
        return await TodoItem.deleteOne({ _id: id });
    },

    // Delete all resources 
    // Return the resource
    clear: async () => {
        return await TodoItem.deleteMany({});
    }
}
