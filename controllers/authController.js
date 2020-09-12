const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateAccessToken = (email, role) => {
    return jwt.sign({ email, role }, process.env.JWT_SECRET); 
}

module.exports.signup = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        const user = await User.create({ email, password, role });
        const accessToken = generateAccessToken(user.email, user.role);

        res.status(201).json({ user, accessToken });
    } catch (error) {
        res.status(400).send(error)        
    }
}

module.exports.login = async (req, res) => {
    const { email, password, role } = req.body;
    
    try {
        const user = await User.login(email, password);
        const accessToken = generateAccessToken(email, role);

        res.status(201).json({ user, accessToken });
    } catch (error) {
        res.status(400).send('Error', error)        
    }
}