// Watch and Code todo app version 11 Destroy all for loops

// todoList.toggleAll should use for each 
// view.displayTodos should use for each

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
		this.todos.forEach(function(todo) {
			if (todo.completed === true) {
				completedTodos++;
			}
		});
		this.todos.forEach(function(todo) {
			if (completedTodos === totalTodos) {
				todo.completed = false;
			} else {
				todo.completed = true;
			}
		});
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
		todoList.todos.forEach(function(todo, index) {
			var todoLi = document.createElement("li");
			// var currentTodo = todo;
			var todoTextWithCompletion = '';
			if (todo.completed === true) {
				todoTextWithCompletion = "(x) " + todo.todoText;
			} else {
				todoTextWithCompletion = "( ) " + todo.todoText;
			}
			todoLi.id = index;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);

		}, this);
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
