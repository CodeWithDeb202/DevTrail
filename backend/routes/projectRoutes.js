const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");


const {
    createProject,
    getProjects,
    getSingleProject

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



module.exports = router;