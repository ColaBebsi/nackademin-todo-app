const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: isEmail,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String, 
        required: true,
        default: 'user',
        enum: ['admin', 'user']
    }
});

// Generate salt and hash password before user is saved to db
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('user', userSchema);