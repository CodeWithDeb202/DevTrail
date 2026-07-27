const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        required:true
    },

    coverImage:{
        type:String,
        default:""
    },

    techStack:[
        {
            type:String
        }
    ],

    status:{
        type:String,
        enum:[
            "Planning",
            "Building",
            "Completed"
        ],
        default:"Planning"
    },

    progress:{
        type:Number,
        default:0
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},
{
    timestamps:true
}
);


module.exports = mongoose.model(
    "Project",
    projectSchema
);