const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports.signup = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        const user = await User.create({ email, password, role });
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).send(error.message)        
    }
}

module.exports 