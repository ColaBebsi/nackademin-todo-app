const mongoose = require('mongoose');

let todoItemSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
    },
    content: {
        type: String
    },
    done: {
        type: Boolean,
        default: false
    },
    // ownerId: {
    //     type: String,
    //     required: true
    // },
    // todoListId: {
    //     type: String, 
    //     required: true
    // }
});

module.exports = mongoose.model('todoItem', todoItemSchema);