const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json('Invalid token');

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
        if (err) {
            res.status(401).json('Invalid token');
        } else {
            return next();
        }
    })
}

module.exports = authenticateToken;