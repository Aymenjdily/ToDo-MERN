const mongoose = require('mongoose')
const taskModel = require('../models/todoModel')

// get all tasks
const getAllTasks = async (req, res) => {
    const task = await taskModel.find({}).sort({createdAt: -1})
    res.status(200).json(task)    
}

// post a task
const postTask = async (req, res) => {
    const { title, notes } = req.body
    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({
            error: 'Please fill in field', 
            emptyFields
        })
    }
    // create task
    try {
        const task = await taskModel.create({ title, notes })
        res.status(200).json(task)
    }
    catch(error) {
        res.status(400).json({
            error: error.message
        })
    }
}

// delete a task
const deleteTask = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const task = await taskModel.findOneAndRemove({_id: id})

    if(!task){
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(task)
}

// update a task
const updateTask = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const task = await taskModel.findByIdAndUpdate({_id: id},{ 
        ...req.body
    })

    if(!task){
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(task)
}

module.exports = {
    getAllTasks,
    postTask,
    deleteTask,
    updateTask
}