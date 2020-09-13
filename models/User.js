const datastore = require('../config/nedb').users;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateAccessToken = (email, role) => {
    return jwt.sign({ email, role }, process.env.JWT_SECRET);
}

module.exports.checkUser = async (email, password) => {
        const user = await datastore.findOne({ email });
        generateAccessToken(user.email, user.role);
        
        return await bcrypt.compare(password, user.password);
    }
    
module.exports.create = async (user) => {
    try {
        // Salt and hash password
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        
        // Generate access token
        const accessToken = generateAccessToken(user.email, user.role);
        
        const createUser = {
            email: user.email,
            password: hash,
            role: user.role,
            accessToken: accessToken
        };
        
        return await datastore.insert(createUser);
    } catch (error) {
        
        return error;        
    }
}


module.exports.read = async (id) => {
    return await datastore.findOne({ _id: id });
}

module.exports.delete = async (id) => {
    return await datastore.remove({ _id: id }); 
}
        