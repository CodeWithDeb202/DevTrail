const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");


const {
    createProject,
    getProjects,
    getSingleProject,
    updateProject,
    toggleLike,
    deleteProject,

} = require("../controllers/projectController");



router.post(
    "/",
    protect,
    createProject
);


router.get(
    "/",
    protect,
    getProjects
);

router.get(
"/:id",
protect,
getSingleProject
);


router.put("/:id", protect, updateProject);


router.post(
    "/:id/like",
    protect,
    toggleLike
);

router.delete("/:id", protect, deleteProject);



module.exports = router;