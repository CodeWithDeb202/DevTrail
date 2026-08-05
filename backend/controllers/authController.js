const User = require("../models/User");
const Project = require("../models/Project");
const DailyLog = require("../models/DailyLog");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Delete Account
exports.deleteAccount = async (req, res) => {
    try {
        const { password } = req.body;

        const user = await User.findById(req.user?.id || req.user?._id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect password",
            });
        }

        // Delete all projects of this user
        const projects = await Project.find({ owner: user._id });

        const projectIds = projects.map((p) => p._id);

        // Delete all logs of this user's projects
        await DailyLog.deleteMany({
            project: { $in: projectIds },
        });

        // Delete all projects
        await Project.deleteMany({
            owner: user._id,
        });

        // Remove user from others' followers/following lists
        await User.updateMany(
            { followers: user._id },
            { $pull: { followers: user._id } }
        );
        await User.updateMany(
            { following: user._id },
            { $pull: { following: user._id } }
        );

        // Delete the user
        await User.findByIdAndDelete(user._id);

        res.json({
            message: "Account deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


// Change Password
exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        // Find the user by email or id from request
        const user = await User.findById(req.user?.id || req.body.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const isMatch = await bcrypt.compare(
            currentPassword,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Current password is incorrect",
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();

        res.json({
            message: "Password changed successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


// Signup

exports.signup = async (req,res)=>{

    try {

        const {name, username, email, password} = req.body;


        const existingEmail = await User.findOne({
            email
        });

        const existingUsername = await User.findOne({
            username
        });

        if (existingEmail) {
            return res.status(400).json({
                message: "Email is already in use"
            });
        }

        if (existingUsername) {
            return res.status(400).json({
                message: "Username is already taken"
            });
        }

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );

        const user = await User.create({
            name,
            username,
            email,
            password: hashedPassword
        });

        const { password: _, ...sanitizedUser } = user.toObject();

        res.status(201).json({
            message: "Account created successfully",
            user: sanitizedUser
        });


    } catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// Login

exports.login = async(req,res)=>{

    try{

        const {email,password}=req.body;


        const user = await User.findOne({
            email
        });


        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }


        const isMatch = await bcrypt.compare(
            password,
            user.password
        );


        if(!isMatch){
            return res.status(400).json({
                message:"Invalid password"
            });
        }


        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        const { password: _, ...sanitizedUser } = user.toObject();

        res.json({
            message: "Login successful",
            token,
            user: sanitizedUser
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};