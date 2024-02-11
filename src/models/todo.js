const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    enroledEmail: {
        type: Array,
        default: []
    }
})

const Todo = model('Todo', todoSchema);

module.exports = Todo;