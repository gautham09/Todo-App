const mongoose = require("mongoose");

//mongodb+srv://admin:SSEH3N1dSGlrljEU@cluster0.2kkvw.mongodb.net/todos

mongoose.connect("mongodb+srv://admin:SSEH3N1dSGlrljEU@cluster0.2kkvw.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);
module.exports = {
    todo
}