const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const STORAGE_KEY = "todo-storage";
let todoArray = [];

function saveTodo() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todoArray));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoArray = todoArray.filter((todo) => todo.id !== li.id);
  saveTodo();
}

function paintTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "❤";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function getTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const todo = {
    id: new Date(),
    text: newTodo,
  };
  todoArray.push(todo);
  paintTodo(todo);
  saveTodo();
}

todoForm.addEventListener("submit", getTodo);

const todoStorage = localStorage.getItem(STORAGE_KEY);
if (todoStorage !== null) {
  const parsedTodo = JSON.parse(todoStorage);
  todoArray = parsedTodo;
  parsedTodo.forEach(paintTodo);
}
