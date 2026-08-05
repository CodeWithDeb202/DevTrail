// Controller: Dashboard statistics
// Provides aggregated statistics for the authenticated user
const Project = require("../models/Project");
const DailyLog = require("../models/DailyLog");

exports.getDashboardStats = async (req, res) => {
    try {
        // Authenticated user ID is attached by auth middleware
        const userId = req.user.id;

        // Count total projects owned by the user
        const totalProjects = await Project.countDocuments({
            owner: userId,
        });

        // Count total daily logs for the user
        const totalLogs = await DailyLog.countDocuments({
            user: userId,
        });

        // Count logs that have status "Completed"
        const completedLogs = await DailyLog.countDocuments({
            user: userId,
            status: "Completed",
        });

        // Fetch recent logs to calculate streak (sorted by newest first)
        const logs = await DailyLog.find({ user: userId }).sort({ createdAt: -1 });

        let streak = 0;

        if (logs.length > 0) {
            // Build a set of unique dates (YYYY-MM-DD) when user created logs
            const uniqueDates = [
                ...new Set(logs.map((log) => log.createdAt.toISOString().split("T")[0])),
            ];

            // Start from today and count consecutive days present in uniqueDates
            let currentDate = new Date();

            for (const date of uniqueDates) {
                const today = currentDate.toISOString().split("T")[0];

                if (date === today) {
                    streak++;
                    currentDate.setDate(currentDate.getDate() - 1);
                } else {
                    break;
                }
            }
        }

        // Overall progress = average of `progress` field across user's projects
        const userProjects = await Project.find({ owner: userId });

        let progress = 0;
        if (userProjects.length > 0) {
            const totalProgress = userProjects.reduce((sum, p) => sum + (p.progress || 0), 0);
            progress = Math.round(totalProgress / userProjects.length);
        }

        // Respond with aggregated stats
        res.json({ totalProjects, totalLogs, streak, completedLogs, progress });
    } catch (err) {
        // Return generic server error with message
        res.status(500).json({ message: err.message });
    }
};
