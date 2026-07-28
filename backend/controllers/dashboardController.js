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
            completed: true
        });

        const logs = await DailyLog.find({
            user: userId
        }).sort({ createdAt: -1 });

        let streak = 0;

        if (logs.length > 0) {
            const uniqueDates = [
                ...new Set(
                    logs.map(log =>
                        log.createdAt.toISOString().split("T")[0]
                    )
                )
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

        const progress =
            totalLogs === 0
                ? 0
                : Math.round((completedLogs / totalLogs) * 100);

        res.json({
            totalProjects,
            totalLogs,
            streak,
            completedLogs,
            progress
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};