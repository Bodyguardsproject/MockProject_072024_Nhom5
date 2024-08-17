const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get token from header Authorization
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        // Token authentication
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Save user information from token to req.user
        next(); // Continue to the next middleware or route handler
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;
