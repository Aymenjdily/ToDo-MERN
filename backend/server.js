require('dotenv').config()

const express = require('express')
const todoRoutes = require('./routes/todoRoutes')
const mongoose = require('mongoose')

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use('/api/todo', todoRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App listening & DB connected on Port : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})