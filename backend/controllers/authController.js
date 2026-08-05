const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


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


        const existingUser = await User.findOne({
            email
        });


        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
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
            password:hashedPassword
        });


        res.status(201).json({
            message:"Account created successfully",
            user
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
                id:user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"7d"
            }
        );


        res.json({
            message:"Login successful",
            token,
            user
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};