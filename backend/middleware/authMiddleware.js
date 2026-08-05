const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware: protect routes by verifying JWT and attaching user to request
const protect = async (req, res, next) => {
    try {
        let token;

        // Read token from Authorization header: "Bearer <token>"
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({ message: "Not authorized. Token missing" });
        }

        // Verify token and decode payload
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user (without password) to request for downstream handlers
        req.user = await User.findById(decoded.id).select("-password");

        next();
    } catch (error) {
        // Token verification failed
        return res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = protect;