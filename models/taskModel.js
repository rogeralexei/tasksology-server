const mongoose = require('mongoose');

const taskSchema=mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please enter a title"]
    },
    description:{
        type: String,
        required: [true, "Please enter a description"]
    },
    status:{
        type: String,
        enum: ["Pending", "In process", "Completed"],
        default: "Pending"
    },
    priority:{
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Low"
    },
},{
    timestamps: true
})

const Task=mongoose.model("Task", taskSchema)

module.exports= Task