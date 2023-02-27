const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Schema of the task
const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Tasks', taskSchema)