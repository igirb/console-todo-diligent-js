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

addNewTodo();