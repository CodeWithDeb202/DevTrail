const DailyLog = require("../models/DailyLog");
const cloudinary = require("../config/cloudinary");


// Create Log
exports.createLog = async (req, res) => {

    try {


        let imageUrl = "";


        if (req.file) {

            const result = await cloudinary.uploader.upload(
                req.file.path,
                {
                    folder: "devtrail/logs"
                }
            );


            imageUrl = result.secure_url;

        }



        const log = await DailyLog.create({

            ...req.body,

            image: imageUrl,

            user: req.user._id

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