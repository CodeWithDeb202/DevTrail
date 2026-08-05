const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },


    username: {
      type: String,
      required: true,
      unique: true
    },


    email: {
      type: String,
      required: true,
      unique: true
    },


    password: {
      type: String,
      required: true
    },


    profileImage: {
      type: String,
      default: ""
    },


    bio: {
      type: String,
      default: ""
    },


    skills: [
      {
        type: String
      }
    ],



    github: {
      type: String,
      default: ""
    },


    linkedin: {
      type: String,
      default: ""
    },


    instagram: {
      type: String,
      default: ""
    },


    website: {
      type: String,
      default: ""
    },



    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],



    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],



publicProfile: {
      type: Boolean,
      default: true
    },

    publicProjects: {
      type: Boolean,
      default: true
    },

    publicTimeline: {
      type: Boolean,
      default: true
    },

    theme: {
      type: String,
      enum: ["dark", "light", "system"],
      default: "dark"
    },

    emailNotifications: {
      type: Boolean,
      default: true
    },

    weeklyReport: {
      type: Boolean,
      default: true
    },

    buildReminder: {
      type: Boolean,
      default: true
    }

  },
  {
    timestamps: true
  }
);


userSchema.virtual("isProfileCompleted").get(function () {

  return (
    this.name &&
    this.bio &&
    this.skills.length > 0
  );

});


module.exports = mongoose.model("User", userSchema);