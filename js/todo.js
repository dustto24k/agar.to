const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const STORAGE_KEY = "todo-storage";
let todoArray = [];

function saveTodo() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todoArray));
}

function deleteTodo(event) {
  const container = event.target.parentElement;
  container.remove();
  todoArray = todoArray.filter((todo) => todo.id !== parseInt(container.id));
  saveTodo();
}

function paintTodo(todo) {
  const container = document.createElement("div");
  container.className = "todo-container";
  container.id = todo.id;

  const text = document.createElement("div");
  text.innerText = todo.text;

  const vrLine = document.createElement("div");

  const created = document.createElement("div");
  created.className = "spec";

  const birth = todo.time;
  created.innerText = `${JSON.stringify(birth).split("-")[1]}/${JSON.stringify(
    birth
  )
    .split("-")[2]
    .substr(0, 2)} ${String(
    Math.abs(JSON.stringify(birth).split("-")[2].substr(3, 2) - 15)
  ).padStart(2, "0")}:${JSON.stringify(birth).split("-")[2].substr(6, 2)}`;

  const age = document.createElement("div");
  age.className = "spec";

  const currentTime = new Date();
  const todoTime = new Date(birth);
  console.log(todoTime);
  const time = (currentTime - todoTime) / 1000;
  age.innerText = `${
    time > 60 ? `${Math.floor(time / 60)} min` : `${Math.floor(time)} sec`
  } old`;

  const status = document.createElement("div");
  status.className = "spec";

  const button = document.createElement("button");
  button.innerText = "🗑";
  button.addEventListener("click", deleteTodo);

  container.appendChild(text);
  container.appendChild(vrLine);
  container.appendChild(created);
  container.appendChild(age);
  container.appendChild(status);
  container.appendChild(button);
  todoList.appendChild(container);
}

function getTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const todo = {
    id: Date.now(),
    time: new Date(),
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
