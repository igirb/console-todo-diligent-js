const fs = require('fs');
const express = require('express');
const path = require('path');

const port = 3000;
const app = express();
const PATH = path.join(__dirname, '/data.json');

app.use(express.json());

app.post('/todos', (req, res) => {
    const data = fs.readFileSync(PATH, 'utf8');
    const todos = data ? JSON.parse(data) : [];
    const newTodo = req.body;
    newTodo.id = todos.length + 1;
    newTodo.completed = false;
    todos.push(newTodo);

    fs.writeFileSync(PATH, JSON.stringify(todos, null, 2), 'utf8');
    res.status(201).json(newTodo);
});

