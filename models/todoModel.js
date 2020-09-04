const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    title: { 
        type: String, 
        required: true, 
        max: 100 
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Todo', TodoSchema);