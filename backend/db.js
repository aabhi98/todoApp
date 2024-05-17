const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://abhi:<password>@movielensdataset.hnts1uy.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}