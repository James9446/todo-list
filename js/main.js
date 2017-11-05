// Watch and Code todo app version 9 Escape from the console 

// There should be an li element for every todo
// Each li element should contain .todoText
// Each li element should show .completed

var todoList = {
	todos: [],
	addTodoObject: function(todoTextParam) {
		this.todos.push({
			todoText: todoTextParam,
			completed: false
		});
	},
	changeTodo: function(index, todoTextParam) {
		// this.todos[index] = newValue;
		// if (index === undefined) {
		// 	index = 0;
		// }
		this.todos[index].todoText = todoTextParam;
	},
	deleteTodo: function(index) {
		// if (numberDeleted === undefined) {
		// 	numberDeleted = 1;
		// }
		this.todos.splice(index, 1);
	},
	toggleCompleted: function(index) {
		var todo = this.todos[index];
		// todo.completed = !todo.completed; instead of this.todos[position].completed = !this.todos[position].completed;
		todo.completed = !todo.completed;
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
	addTodo: function() {
		var addTodoTextInput = document.getElementById("addTodoTextInput");
		todoList.addTodoObject(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodo: function() {
		var changeTodoIndexInput = document.getElementById("changeTodoIndexInput");
		var changeTodoTextInput = document.getElementById("changeTodoTextInput");
		todoList.changeTodo(changeTodoIndexInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoIndexInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	deleteTodo: function() {
		var deleteTodoIndexInput = document.getElementById("deleteTodoIndexInput");
		// var deleteTodoNumberDeletedInput = document.getElementById("deleteTodoNumberDeletedInput");
		todoList.deleteTodo(deleteTodoIndexInput.valueAsNumber);
		deleteTodoIndexInput.vaue = '';
		view.displayTodos();
	},
	toggleCompleted: function() {
		var toggleCompletedInput = document.getElementById("toggleCompletedInput");
		todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
		toggleCompletedInput.value = '';
		view.displayTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
	}
};

// Called view because it responisble for thinga that the users see
// It doesn't have any logic or data
var view = {
	displayTodos: function() {
		var todosUl = document.querySelector("ul");		
		todosUl.innerHTML = '';
		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement("li");
			var currentTodo = todoList.todos[i];
			var todoTextWithCompletion = '';
			if (currentTodo.completed === true) {
				todoTextWithCompletion = "(x) " + currentTodo.todoText;
			} else {
				todoTextWithCompletion = "( ) " + currentTodo.todoText;
			}
			todoLi.textContent = todoTextWithCompletion;
			todosUl.appendChild(todoLi);
		}
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