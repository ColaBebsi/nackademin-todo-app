// Import libraries
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create schema 
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true, 
        default: 'user',
        enum: ['admin', 'user']
    },
    todoItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TodoItem'
    }]
}, { timestamps: true, versionKey: false });

// Define model
const User = mongoose.model('User', UserSchema);

// Export model 
module.exports = User;

// Insert resource to database 
// Returns the resource 
module.exports.signup = async (user) => {
    // Generate salt
    const salt = await bcrypt.genSalt();

    // Set user password to hashed password
    // Hash user password and attach salt 
    user.password = await bcrypt.hash(user.password, salt);

    return await User.create(user);
}

// Check if resource credentials is correct 
module.exports.login = async (email, password) => {
    // Find user email
    const user = await User.findOne({ email });

    // If user exists
    if (user) {

        // Compare the entered password and the hashed password
        const authenticatedUser = await bcrypt.compare(password, user.password); 
        
        // If password is correct
        if (authenticatedUser) {

            // Return the user 
            return user;
        } 

        // If password is NOT correct, throw error
        throw Error('Incorrect password');
    } 
    
    // If user doesn't exist, throw error
    throw Error('Incorrect email');
}

// Find all resources
// Return all resources
module.exports.getAll = async () => {
    return await User.find({});
}

// Delete all resources 
// Return the resource
module.exports.clear = async () => {
    return await User.deleteMany({});
}






