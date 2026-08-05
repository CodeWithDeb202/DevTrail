const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Load environment variables from .env
dotenv.config();

// Route imports
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const logRoutes = require("./routes/logRoutes");
const profileRoutes = require("./routes/profileRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// Middleware
app.use(
    cors({
        // Allow origin based on environment (development uses localhost list)
        origin: process.env.NODE_ENV === "production" ? process.env.FRONTEND_URL : ["http://localhost:3000", "http://localhost:3001"],
        credentials: true,
    })
);
app.use(express.json());

// API route registration
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Health / test route
app.get("/", (req, res) => {
    res.json({ message: "🚀 DevTrail Backend Running Successfully" });
});

// Start server after connecting to database
const PORT = process.env.PORT || 5002;

connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});