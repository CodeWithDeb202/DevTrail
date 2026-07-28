const express = require("express");

const router = express.Router();

const {
    getPublicProfile,
    getMyProfile,
    updateProfile,
    followUser,
    unfollowUser
} = require("../controllers/profileController");
const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");


router.get("/me", protect, getMyProfile);

router.put(
    "/update",
    protect,
    upload.single("profileImage"),
    updateProfile
);

router.get("/:username", getPublicProfile);

router.post(

    "/follow/:id",

    protect,

    followUser

);

router.post(

    "/unfollow/:id",

    protect,

    unfollowUser

);


module.exports = router;