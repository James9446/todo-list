// Watch and Code todo app version 10 Click to delete

// There should be a way to create delete buttons
// There should be a delete button for each todo
// Each li should have an id that has the todo position (index)
// Delete buttons should have access to the todo id
// Clicking delete should update the todoList.todos and the DOM

var todoList = {
	todos: [],
	addTodoObject: function(todoTextParam) {
		this.todos.push({
			todoText: todoTextParam,
			completed: false
		});
	},
	changeTodo: function(index, todoTextParam) {
		this.todos[index].todoText = todoTextParam;
	},
	deleteTodo: function(index) {
		this.todos.splice(index, 1);
	},
	toggleCompleted: function(index) {
		var todo = this.todos[index];
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
	deleteTodo: function(index) {
		todoList.deleteTodo(index);
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

			todoLi.id = i;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.className = "deleteButton";
		return deleteButton;
	},
	setUpEventListeners: function() {
		var todosUl = document.querySelector("ul");

		// This event listener is 'listening' to all clicks on the ul 
		todosUl.addEventListener("click", function(event) {
			// Get the element that was clicked on
			var elementClicked = event.target;

			// Check if element clicked is a delete button
			if (elementClicked.className === "deleteButton") {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();

todoList.addTodoObject("first");
todoList.addTodoObject("second");
todoList.addTodoObject("third");
todoList.addTodoObject("fourth");
todoList.addTodoObject("fifth");
todoList.addTodoObject("sixth");
