const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://abhi:mongodbtodo1@todoapp.bcowo9e.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}