const mongoose = require("mongoose");

const dailyLogSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: [
        "Planning",
        "Development",
        "Testing",
        "Deployment",
        "Completed",
      ],
      default: "Development",
    },

    tags: {
      type: [String],
      default: [],
    },

    challenges: {
      type: String,
      default: "",
    },

    learnings: {
      type: String,
      default: "",
    },

    timeSpent: {
      type: Number,
      default: 0,
    },

    mood: {
      type: String,
      enum: [
        "Great",
        "Good",
        "Average",
        "Difficult",
        "Debugging",
      ],
      default: "Good",
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

dailyLogSchema.index({ user: 1, project: 1, createdAt: -1 });

// Export DailyLog model
module.exports = mongoose.model("DailyLog", dailyLogSchema);