const jwt = require('jsonwebtoken');

// Define role IDs that are allowed to access the protected routes
const ALLOWED_ROLES = [1, 2, 3];

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

        // Check if the user role is allowed
        if (!ALLOWED_ROLES.includes(req.user.role_id)) {
            return res.status(403).json({ error: 'Access denied' });
        }

        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;
