const Project = require("../models/Project");
const DailyLog = require("../models/DailyLog");


// Create Project

exports.createProject = async (req, res) => {


    try {

        console.log(req.body);
        console.log(req.user);

        const project = await Project.create({

            ...req.body,

            owner: req.user._id

        });


        res.status(201).json({

            message: "Project created successfully",

            project

        });


    }
    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};



// Get User Projects

exports.getProjects = async (req, res) => {


    try {


        const projects = await Project.find({

            owner: req.user._id

        });


        res.json(projects);


    }
    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }


};


exports.getSingleProject = async (req, res) => {

    try {

        const project = await Project.findById(
            req.params.id
        );

        if (!project) {

            return res.status(404).json({
                message: "Project not found"
            });

        }

        project.views += 1;

        await project.save();

        res.json(project);

    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


exports.updateProject = async (req, res) => {

    try {

        const project = await Project.findById(
            req.params.id
        );

        if (!project) {

            return res.status(404).json({
                message: "Project not found"
            });

        }

        if (
            project.owner.toString() !==
            req.user._id.toString()
        ) {

            return res.status(403).json({
                message: "Unauthorized"
            });

        }

        Object.assign(
            project,
            req.body
        );

        await project.save();

        res.json(project);

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};



exports.deleteProject = async (req, res) => {

    try {

        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                message: "Project not found"
            });
        }

        if (
            project.owner.toString() !==
            req.user._id.toString()
        ) {
            return res.status(403).json({
                message: "Unauthorized"
            });
        }

        // Delete all logs of this project
        await DailyLog.deleteMany({
            project: project._id
        });

        // Delete the project
        await project.deleteOne();

        res.json({
            message: "Project and all logs deleted successfully"
        });

    } catch (err) {
        console.error("DELETE ERROR:", err);

        res.status(500).json({
            message: err.message,
            stack: err.stack,
        });
    }

};


exports.toggleLike = async (req, res) => {

    try {

        const project = await Project.findById(
            req.params.id
        );

        if (!project) {

            return res.status(404).json({
                message: "Project not found"
            });

        }

        const alreadyLiked =
            project.likes.includes(
                req.user._id
            );

        if (alreadyLiked) {

            project.likes =
                project.likes.filter(
                    id =>
                        id.toString() !==
                        req.user._id.toString()
                );

        }
        else {

            project.likes.push(
                req.user._id
            );

        }

        await project.save();

        res.json({
            likes: project.likes.length
        });

    }
    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};