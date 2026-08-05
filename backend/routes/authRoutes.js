const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    signup,
    login,
    changePassword
}=require("../controllers/authController");


router.post("/signup", signup);

router.post("/login", login);

router.put("/password", protect, changePassword);


module.exports = router;
