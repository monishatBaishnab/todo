const router = require('express').Router();
const Todo = require('../../models/todo');

router.get('/todos', async (req, res, next) => {
    try {
        const result = await Todo.find().select('_id title date');
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.get('/todos/:id', async (req, res, next) => {
    try {
        const todoId = req.params.id;
        const result = await Todo.findOne({ _id: todoId });
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.post('/todos', async (req, res, next) => {
    try {
        const data = new Todo(req.body);
        const result = await data.save();
        res.send(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
})

router.put('/todos/:id', async (req, res, next) => {
    try {
        const todoId = req.params.id;
        const data = req.body;
        const result = await Todo.updateOne({ _id: todoId }, { $set: { ...data } });
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.delete('/todos/:id', async (req, res, next) => {
    try {
        const todoId = req.params.id;
        const result = await Todo.deleteOne({ _id: todoId });
        res.send(result);
    } catch (error) {
        next(error);
    }
})

module.exports = router;