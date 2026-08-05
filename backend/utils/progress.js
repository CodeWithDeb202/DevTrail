const Project = require("../models/Project");
const DailyLog = require("../models/DailyLog");

/**
 * Recalculates a project's progress based on its daily logs.
 * Progress = percentage of logs with status "Completed".
 * If no logs exist, progress is 0.
 * If any log is "Completed", it counts toward completion.
 */
const recalculateProjectProgress = async (projectId) => {
    try {
        const totalLogs = await DailyLog.countDocuments({
            project: projectId,
        });

        if (totalLogs === 0) {
            await Project.findByIdAndUpdate(projectId, { progress: 0 });
            return 0;
        }

        const completedLogs = await DailyLog.countDocuments({
            project: projectId,
            status: "Completed",
        });

        const progress = Math.round((completedLogs / totalLogs) * 100);

        await Project.findByIdAndUpdate(
            projectId,
            { progress },
            { new: true }
        );

        return progress;
    } catch (error) {
        console.error("Error recalculating project progress:", error.message);
        return null;
    }
};

module.exports = { recalculateProjectProgress };
