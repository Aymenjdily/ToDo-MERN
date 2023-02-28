require('dotenv').config()

const express = require('express')
const todoRoutes = require('./routes/todoRoutes')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// Middleware
app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

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