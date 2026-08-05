const mongoose = require("mongoose");
const DailyLog = require("./DailyLog");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String,
      default: "",
    },

    techStack: [
      {
        type: String,
      },
    ],

    status: {
      type: String,
      enum: ["Planning", "Building", "Completed"],
      default: "Planning",
    },

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    githubLink: {
      type: String,
      default: "",
    },

    liveLink: {
      type: String,
      default: "",
    },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    views: {
      type: Number,
      default: 0,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


projectSchema.pre(
    "deleteOne",
    { document: true, query: false },
    async function () {

        await DailyLog.deleteMany({
            project: this._id
        });
    }
);

// Export the Project model
module.exports = mongoose.model("Project", projectSchema);