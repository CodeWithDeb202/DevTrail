const Project = require("../models/Project");
const DailyLog = require("../models/DailyLog");

exports.getDashboardStats = async (req, res) => {
    try {
        const userId = req.user.id;

        const totalProjects = await Project.countDocuments({
            owner: userId
        });

        const totalLogs = await DailyLog.countDocuments({
            user: userId
        });

        const completedLogs = await DailyLog.countDocuments({
            user: userId,
            status: "Completed"
        });

        const logs = await DailyLog.find({
            user: userId
        }).sort({ createdAt: -1 });

        let streak = 0;

        if (logs.length > 0) {
            const uniqueDates = [
                ...new Set(
                    logs.map((log) =>
                        log.createdAt.toISOString().split("T")[0]
                    )
                ),
            ];

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

// Overall progress = average project completion across all projects
        const userProjects = await Project.find({
            owner: userId
        });

        let progress = 0;
        if (userProjects.length > 0) {
            const totalProgress = userProjects.reduce(
                (sum, p) => sum + (p.progress || 0),
                0
            );
            progress = Math.round(totalProgress / userProjects.length);
        }

        res.json({
            totalProjects,
            totalLogs,
            streak,
            completedLogs,
            progress,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};
