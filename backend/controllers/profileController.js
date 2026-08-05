const User = require("../models/User");
const Project = require("../models/Project");
const cloudinary = require("../config/cloudinary");


exports.getPublicProfile = async (req, res) => {


    try {


        const user = await User.findOne({
            username: req.params.username
        })
            .select("-password")
            .populate("followers", "username profileImage")
            .populate("following", "username profileImage");



        if (!user) {

            return res.status(404).json({
                message: "Profile not found"
            })

        }



        const projects = await Project.find({

            owner: user._id

        })
            .sort({ createdAt: -1 });



        res.json({

            user,

            projects,

            projectsCount: projects.length

        });


    }
    catch (error) {

        res.status(500).json({
            message: error.message
        })

    }


}


exports.getMyProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select("-password")
            .populate("followers", "username profileImage")
            .populate("following", "username profileImage");

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const projects = await Project.find({
            owner: user._id,
        });

        res.json({
            user,
            projects,
            projectsCount: projects.length,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.updateProfile = async (req, res) => {
    try {
const {
            name,
            bio,
            skills,
            github,
            linkedin,
            instagram,
            website,
            publicProfile,
            publicProjects,
            publicTimeline,
            theme,
            emailNotifications,
            weeklyReport,
            buildReminder,
        } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        if (name !== undefined) user.name = name;
        if (bio !== undefined) user.bio = bio;
        if (github !== undefined) user.github = github;
        if (linkedin !== undefined) user.linkedin = linkedin;
        if (instagram !== undefined) user.instagram = instagram;
        if (website !== undefined) user.website = website;
        if (publicProfile !== undefined) user.publicProfile = publicProfile;
        if (publicProjects !== undefined) user.publicProjects = publicProjects;
        if (publicTimeline !== undefined) user.publicTimeline = publicTimeline;
        if (theme !== undefined) user.theme = theme;
        if (emailNotifications !== undefined) user.emailNotifications = emailNotifications;
        if (weeklyReport !== undefined) user.weeklyReport = weeklyReport;
        if (buildReminder !== undefined) user.buildReminder = buildReminder;

        if (skills) {
            user.skills =
                typeof skills === "string"
                    ? skills.split(",").map((item) => item.trim())
                    : skills;
        }

        if (req.file) {

            const file = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

            const result = await cloudinary.uploader.upload(file, {
                folder: "devtrail/profile",
            });

            user.profileImage = result.secure_url;

        }

        await user.save();

        res.json({
            message: "Profile Updated Successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


exports.followUser = async (req, res) => {


    const userToFollow =
        await User.findById(req.params.id);



    const currentUser =
        await User.findById(req.user.id);



    if (
        !currentUser.following.includes(userToFollow._id)
    ) {


        currentUser.following.push(
            userToFollow._id
        );


        userToFollow.followers.push(
            currentUser._id
        );



        await currentUser.save();
        await userToFollow.save();


    }



    res.json({
        message: "Followed"
    });


}

exports.unfollowUser = async (req, res) => {

    const currentUser =

        await User.findById(req.user.id);

    const otherUser =

        await User.findById(req.params.id);

    currentUser.following =

        currentUser.following.filter(

            (id) =>

                id.toString() !== otherUser._id.toString()

        );

    otherUser.followers =

        otherUser.followers.filter(

            (id) =>

                id.toString() !== currentUser._id.toString()

        );

    await currentUser.save();

    await otherUser.save();

    res.json({

        message: "Unfollowed"

    });

}
