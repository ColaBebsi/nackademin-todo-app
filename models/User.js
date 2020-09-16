// Connection to database users.db
const datastore = require('../config/nedb').users;

// Import libraries
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Returns a jwt with a payload containing email and role 
const generateAccessToken = (email, role) => {
    return jwt.sign({ email, role }, process.env.JWT_SECRET);
}

// Login user
module.exports.checkUser = async (email, password) => {
        // Find user email
        const user = await datastore.findOne({ email });
        
        // Generate a jwt
        generateAccessToken(user.email, user.role);
        
        // Returns true or false 
        return await bcrypt.compare(password, user.password);
    }

// Signup user 
module.exports.create = async (user) => {
    try {
        // Salt and hash password
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        
        // Generate access token
        const accessToken = generateAccessToken(user.email, user.role);
        
        // Create user object 
        const createUser = {
            email: user.email,
            password: hash,
            role: user.role,
            accessToken: accessToken
        };
        
        // Insert user object to database
        // Returns the resource
        return await datastore.insert(createUser);
    } catch (error) {
        return error;        
    }
}

// Find resource with corresponding ID 
// Returns the resource
module.exports.read = async (id) => {
    return await datastore.findOne({ _id: id });
}

// Delete resource with corresponding ID 
// Returns 1 if resource is deleted 
module.exports.delete = async (id) => {
    return await datastore.remove({ _id: id }); 
}
        