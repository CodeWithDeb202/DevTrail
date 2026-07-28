const DailyLog = require("../models/DailyLog");


// Create Log
exports.createLog = async (req, res) => {

    try {

        const {
            project,
            title,
            description,
            status,
            tags,
            challenges,
            learnings,
            timeSpent,
            mood,
        } = req.body;



        const log = await DailyLog.create({

            project,
            title,
            description,
            status,
            tags,
            challenges,
            learnings,
            timeSpent,
            mood,
            user: req.user._id,

        });


        res.status(201).json({

            message: "Daily log added",

            log

        });


    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// Get Project Logs

exports.getLogs = async (req, res) => {

    try {


        const logs = await DailyLog.find({

            project: req.params.projectId

        })
            .sort({
                createdAt: -1
            });


        res.json(logs);


    }
    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};


// Get Single Log

exports.getSingleLog = async (req, res) => {
    try {
        const log = await DailyLog.findById(req.params.id)
            .populate("project", "title")
            .populate("user", "name profileImage");

        if (!log) {
            return res.status(404).json({
                message: "Log not found",
            });
        }

        res.json(log);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


exports.updateLog = async (req, res) => {
    try {
        const log = await DailyLog.findById(req.params.id);

        if (!log) {
            return res.status(404).json({
                message: "Log not found",
            });
        }

        if (log.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Unauthorized",
            });
        }

        const updatedLog = await DailyLog.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );

        res.json({
            message: "Log updated successfully",
            log: updatedLog,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


exports.deleteLog = async (req, res) => {
    try {
        const log = await DailyLog.findById(req.params.id);

        if (!log) {
            return res.status(404).json({
                message: "Log not found",
            });
        }

        if (log.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Unauthorized",
            });
        }

        await log.deleteOne();

        res.json({
            message: "Daily log deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


exports.searchLogs = async (req, res) => {
    try {
        const keyword = req.query.search || "";

        const logs = await DailyLog.find({
            user: req.user._id,
            title: {
                $regex: keyword,
                $options: "i",
            },
        });

        res.json(logs);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


exports.getLogStats = async (req, res) => {
    try {
        const totalLogs = await DailyLog.countDocuments({
            user: req.user._id,
        });

        const totalProjects = await DailyLog.distinct("project", {
            user: req.user._id,
        });

        res.json({
            totalLogs,
            totalProjects: totalProjects.length,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};