const datastore = require('../config/nedb').todoItems;

module.exports = {
    create: async (todoItem) => {
        return await datastore.insert(todoItem);
    },
    read: async (id) => {
        return await datastore.findOne({ _id: id }); 
    },
    readAll: async () => {
        return await datastore.find({}); 
    },
    update: async (id, setTodo) => {
        // Returns 1 if option is not set
        return await datastore.update({ _id: id }, { $set: setTodo }, { returnUpdatedDocs: true }); 
    },
    delete: async (id) => {
        // Returns 1 
        return await datastore.remove({ _id: id }); 
    },
    deleteAll: async () => {
        // Returns number of deleted items
        return await datastore.remove({}, { multi: true });
    }
}