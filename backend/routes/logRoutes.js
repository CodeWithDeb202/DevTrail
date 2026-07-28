const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {getLogs, createLog, getLogStats, searchLogs, deleteLog, updateLog, getSingleLog} = require("../controllers/logController");

router.post("/", protect, createLog);

router.get("/stats", protect, getLogStats);

router.get("/search", protect, searchLogs);

router.get("/project/:projectId", protect, getLogs);

router.get("/:id", protect, getSingleLog);


router.put("/:id", protect,  updateLog);

router.delete("/:id", protect, deleteLog);

module.exports = router;