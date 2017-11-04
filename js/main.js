// Watch and Code todo app version 8 refactoring 

// It should have working controls for .addTodo
// It should have working controls for .changeTodo
// It should have working controls for .deleteTodo
// It should have working controls for .toggleCompleted

var todoList = {
	todos: [],
	displayTodos: function() {
		// debugger;
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
		// if (index === undefined) {
		// 	index = 0;
		// }
		this.todos[index].todoText = todoTextParam;
		this.displayTodos();
	},
	deleteTodo: function(index) {
		// if (numberDeleted === undefined) {
		// 	numberDeleted = 1;
		// }
		this.todos.splice(index, 1);
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
};

// var displayTodosButton = document.getElementById("displayTodosButton");
// var toggleAllButton = document.getElementById("toggleAllButton");

// displayTodosButton.addEventListener("click", function() {
// 	todoList.displayTodos();
// });

// toggleAllButton.addEventListener("click", function() {
// 	todoList.toggleAll();
// }); 

var handlers = {
	displayTodos: function() {
		todoList.displayTodos();
	},
	addTodo: function() {
		var addTodoTextInput = document.getElementById("addTodoTextInput");
		todoList.addTodoObject(addTodoTextInput.value);
		addTodoTextInput.value = '';
	},
	changeTodo: function() {
		var changeTodoIndexInput = document.getElementById("changeTodoIndexInput");
		var changeTodoTextInput = document.getElementById("changeTodoTextInput");
		todoList.changeTodo(changeTodoIndexInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoIndexInput.value = '';
		changeTodoTextInput.value = '';
	},
	deleteTodo: function() {
		var deleteTodoIndexInput = document.getElementById("deleteTodoIndexInput");
		// var deleteTodoNumberDeletedInput = document.getElementById("deleteTodoNumberDeletedInput");
		todoList.deleteTodo(deleteTodoIndexInput.valueAsNumber);
		deleteTodoIndexInput.vaue = '';
	},
	toggleCompleted: function() {
		var toggleCompletedInput = document.getElementById("toggleCompletedInput");
		todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
		toggleCompletedInput.value = '';
	},
	toggleAll: function() {
		todoList.toggleAll();
	}
};




// todoList.displayTodos();

todoList.addTodoObject("first");
todoList.addTodoObject("second");
todoList.addTodoObject("third");
todoList.addTodoObject("fourth");
todoList.addTodoObject("fifth");
todoList.addTodoObject("sixth");

// todoList.changeTodo(0, "changed");

// todoList.toggleCompleted(0);
// todoList.toggleCompleted(1);
// todoList.toggleCompleted(2);
// todoList.toggleCompleted(3);
// todoList.toggleCompleted(4);
// todoList.toggleCompleted(5);

// todoList.deleteTodo(2, 2);
// todoList.toggleAll();