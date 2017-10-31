// Watch and Code todo app version 4

// todoList.addTodo should add objects
// todoList.changeTodo should change todoText property
// todoList.toggleCompleted should change the completed property

var todoList = {
	todos: [],
	displayTodos: function() {
		console.log("My todos:", this.todos);
	},
	addTodo: function(todoTextParam) {
		this.todos.push({
			todoText: todoTextParam,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(index, todoTextParam) {
		// this.todos[index] = newValue;
		this.todos[index].todoText = todoTextParam;
		this.displayTodos();
	},
	deleteTodo: function(index, numberDeleted) {
		if (numberDeleted === undefined) {
			numberDeleted = 1;
		}
		this.todos.splice(index, numberDeleted);
		this.displayTodos();
	},
	toggleCompleted: function(index) {
		var todo = this.todos[index];
		// todo.completed = !todo.completed; instead of this.todos[position].completed = !this.todos[position].completed;
		todo.completed = !todo.completed;
		this.displayTodos();
	}
}


// todoList.displayTodos();
todoList.addTodo("some stuff");
todoList.changeTodo(0, "changed");
todoList.toggleCompleted(0);
// todoList.deleteTodo(2, 2);