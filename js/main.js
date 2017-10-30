// Watch and Code todo app version 2 

var todos = ["item 1", "item 2", "item 3"];

// It should have a function to display todos
function displayTodos() {
	console.log("My todos:", todos);
}

// It should have a function to add todos
function addTodo(newTodo) {
	todos.push(newTodo);
	displayTodos();
}

// It should have a function to change a todo
function changeTodo(index, newValue) {
	todos[index] = newValue;
	displayTodos();
}

// It should have a function to delete todos
function deleteTodo(index, numberDeleted) {
	if (numberDeleted === undefined) {
		numberDeleted = 1;
	}
	todos.splice(index, numberDeleted);
	displayTodos();
}

displayTodos();
addTodo("some stuff");
changeTodo(0, "changed");
deleteTodo(2, 2);