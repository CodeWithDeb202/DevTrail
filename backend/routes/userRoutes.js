const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");


router.get("/profile", protect, async(req,res)=>{

    try{

        res.status(200).json({
            user:req.user
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


module.exports = router;