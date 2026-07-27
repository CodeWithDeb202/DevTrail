const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");


const {
    createLog,
    getLogs
} = require("../controllers/logController");



router.post(
    "/",
    protect,
    upload.single("image"),
    createLog
);



router.get(
    "/:projectId",
    protect,
    getLogs
);



module.exports = router;