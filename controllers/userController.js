const User = require('../models/User');
const validator = require('validator');


module.exports.signup = async (req, res) => {
    const { email, password, role } = req.body;
    
    try {
        if (validator.isEmail(email) === true) {
            const user = await User.create({ email, password, role });
            res.status(201).json(user);
        } else {
            res.status(400).send({ message: 'Please enter a valid email' })
        }

    } catch (error) {
        res.status(400).json(error);
    }    
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.checkUser(email, password);

        // Check if password match
        if (user === true) {
            res.status(200).json('Correct password');
        } else {
            res.status(400).json('Wrong password');

        }

    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports.readUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.read(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports.deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.delete(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
}