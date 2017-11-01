// Watch and Code todo app version 5

// displayTodos should show .todoText
// displayTodos should tell you if .todos is empty
// displayTodos should show .completed

var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log("Your todo list is empty!")
		} else {
			console.log("My todos:");
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log("(x)", this.todos[i].todoText);
				} else {
					console.log("( )", this.todos[i].todoText);
				}
			}
		}
	},
	addTodoObject: function(todoTextParam) {
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


todoList.displayTodos();
todoList.addTodoObject("some stuff");
todoList.changeTodo(0, "changed");
todoList.toggleCompleted(0);
// todoList.deleteTodo(2, 2);