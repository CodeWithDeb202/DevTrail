const User = require("../models/User");
const Project = require("../models/Project");


exports.getPublicProfile = async (req, res) => {

    try {


        const user = await User.findOne({
            username: req.params.username
        })
            .select("-password");


        if (!user) {

            return res.status(404).json({
                message: "Profile not found"
            });

        }



        const projects = await Project.find({
            owner: user._id
        });


        res.json({

            user,
            projects

        });


    }
    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};