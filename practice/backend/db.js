const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ronitkhajuria03:Rksharma%402003@cluster0.qx4xpmb.mongodb.net/practiceTodo");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}