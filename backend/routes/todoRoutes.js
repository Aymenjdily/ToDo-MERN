const express = require('express')

const router = express.Router()

const {
    getAllTasks,
    postTask,
    deleteTask,
    updateTask
} = require('../controllers/todoController')

// get all tasks
router.get('/', getAllTasks)

// post a task
router.post('/', postTask)

// delete a task
router.delete('/:id', deleteTask)

// update a task
router.patch('/:id', updateTask)


module.exports = router