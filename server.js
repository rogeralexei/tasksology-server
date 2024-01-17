const express = require("express");
const { db } = require("./config");
const Task=require("./models/taskModel")
const app = express();

app.use(express.json())

app.get('/tasks', async (req, res) => {
    try {
       const tasks=await Task.find({})
       res.status(200).json(tasks)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});

app.get('/tasks/:id', async (req, res) => {
    try {
        const {id}=req.params
       const task=await Task.findById(id)
       res.status(200).json(task)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});

app.post("/tasks", async (req, res) => {
    try {
        const task=await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.put('/tasks/:id', async (req, res) => {
    try {
        const {id}=req.params
       const task=await Task.findByIdAndUpdate(id, req.body)
       if(!task){
        res.status(400).json({message: "The task you tried to edit does not exist"})
       }else{
        const updatedProduct= await Task.findById(id)
        res.status(200).json(updatedProduct)
       }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});

app.delete('/tasks/:id', async (req, res) => {
    try {
        const {id}=req.params
       const task=await Task.findByIdAndDelete(id, req.body)
       if(!task){
        res.status(400).json({message: "The task you tried to edit does not exist"})
       }else{
        res.status(200).json(task)
       }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
});

app.listen(3000, () => {
    console.log("The server is on!");
});