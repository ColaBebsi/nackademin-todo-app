// Connection to database todoItems.db
const datastore = require('../config/nedb').todoItems;

module.exports = {

    // Insert document into database
    // Returns the resource
    create: async (todoItem) => {
        return await datastore.insert(todoItem);
    },

    // Find specific document based on ID 
    // Returns the resource
    read: async (id) => {
        return await datastore.findOne({ _id: id }); 
    },

    // Find all documents
    // Returns the resources
    readAll: async () => {
        return await datastore.find({}); 
    },

    // Find all documents with corresponding ID
    // If no document is found, returns []
    readList: async (todoListId) => {
        return await datastore.find({ todoListId });
    },

    // Update document with corresponding ID  
    update: async (id, setTodo) => {
        // Returns 1 if option is not set
        return await datastore.update({ _id: id }, { $set: setTodo }, { returnUpdatedDocs: true }); 
    },

    // Delete document with corresponding ID  
    delete: async (id) => {
        // Returns 1 
        return await datastore.remove({ _id: id }); 
    },

    // Delete all documents  
    deleteAll: async () => {
        // Returns number of deleted documents
        return await datastore.remove({}, { multi: true });
    }
}