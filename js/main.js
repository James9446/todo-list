// Watch and Code todo app version 3 

// It should store todos array on an object
// It should have a method to display todos
// It should have a method to add todos
// It should have a method to change a todo
// It should have a function to delete todos
var todoList = {
	todos: ["item 1", "item 2", "item 3"],
	displayTodos: function() {
		console.log("My todos:", this.todos);
	},
	addTodo: function(newTodo) {
		this.todos.push(newTodo);
		this.displayTodos();
	},
	changeTodo: function(index, newValue) {
		this.todos[index] = newValue;
		this.displayTodos();
	},
	deleteTodo: function(index, numberDeleted) {
		if (numberDeleted === undefined) {
			numberDeleted = 1;
		}
		this.todos.splice(index, numberDeleted);
		this.displayTodos();
	}
}

todoList.displayTodos();
todoList.addTodo("some stuff");
todoList.changeTodo(0, "changed");
todoList.deleteTodo(2, 2);