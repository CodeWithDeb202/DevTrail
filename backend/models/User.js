const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profileImage: {
      type: String,
      default: ""
    },

    github: {
      type: String,
      default: ""
    },

    linkedin: {
      type: String,
      default: ""
    },

    website: {
      type: String,
      default: ""
    },

    publicProfile: {
      type: Boolean,
      default: true
    },

    avatar: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    skills: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("User", userSchema);