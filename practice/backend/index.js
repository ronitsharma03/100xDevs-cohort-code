const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { todo } = require('./db');
const { createTodo, updateTodo } = require('./types');

app.use(express.json());
app.use(cors());


app.get('/todos', async function (req, res) {
    const foundTodo = await todo.find({});
    req.body = foundTodo;
    console.log(req.body);
    res.json({
        foundTodo
    });
});

app.post('/todo', async function (req, res) {
    const createTodoPayload = req.body;
    const parsedPayload = createTodo.safeParse(createTodoPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Something up with the inputs!"
        });
        return;
    }
    else {
        await todo.create({
            title: createTodoPayload.title,
            description: createTodoPayload.description,
            completed: false
        });
    }
    res.json({
        msg: "Todo created succesfully"
    });
});

app.put('/completed', async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Something wrong in update inputs"
        });
    }
    else {
        await todo.updateOne({
            _id: req.body.id,
        },
            {
                completed: true
            });
        res.json({
            msg: "Todo updated successfully!"
        });
    }

});


app.listen(port);