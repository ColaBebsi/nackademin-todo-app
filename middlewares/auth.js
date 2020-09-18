const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    
    // Return undefined if there is no authHeader
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        // Save user in request object
        req.user = user;
        next();
    });
}

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        res.status(401).send('You are not an admin!');
        console.log(req.user.role);
    }
    next();
}

module.exports = { authenticateToken, isAdmin };