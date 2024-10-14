const prompt = require('prompt-sync')()

async function addNewTodo() {
    const content = prompt(`Add a new task to your todo list: `);

    const response = await fetch(`http://localhost:3000/todos`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({content}),
    });
    const newTodo = await response.json();
    console.log(`New Todo item added: ${newTodo.content}`);
}

async function deleteTodo() {
    const todoId = prompt('Enter the ID of the todo to delete: ');
    const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
        method: 'DELETE'
    });
    const message = await response.json();
    console.log(message.message);
}

addNewTodo();
deleteTodo();