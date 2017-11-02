// Watch and Code todo app version 6

// .toggleAll If everything's true, make everything false
// .toggleAll Otherwise make everything true

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
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		for (var i = 0; i < this.todos.length; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		if (completedTodos === totalTodos) {
			for (var i = 0; i < this.todos.length; i++) {
				this.todos[i].completed = false;
			}
		} else {
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === false) {
					this.todos[i].completed = true;
				}
			}
		}
	this.displayTodos();
	}
}


todoList.displayTodos();
todoList.addTodoObject("first");
todoList.addTodoObject("second");
todoList.addTodoObject("third");
todoList.addTodoObject("fourth");
todoList.addTodoObject("fifth");
todoList.addTodoObject("sixth");
// todoList.changeTodo(0, "changed");
todoList.toggleCompleted(0);
// todoList.toggleCompleted(1);
todoList.toggleCompleted(2);
todoList.toggleCompleted(3);
todoList.toggleCompleted(4);
todoList.toggleCompleted(5);
// todoList.deleteTodo(2, 2);
todoList.toggleAll();