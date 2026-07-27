const mongoose = require("mongoose");


const dailyLogSchema = new mongoose.Schema(
    {
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        image: {
            type: String,
            default: ""
        },

        date: {
            type: Date,
            default: Date.now
        }

    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model(
    "DailyLog",
    dailyLogSchema
);