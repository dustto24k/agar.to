const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const title = document.querySelector(".title");
let userName = localStorage.getItem("username");

function getName(event) {
  event.preventDefault();
  const userInput = loginInput.value;
  userName = userInput;
  title.innerText = `${userInput} 's To-Do List`;
  localStorage.setItem("username", userInput);
}

if (userName === null) {
  loginForm.addEventListener("submit", getName);
} else {
  title.innerText = `${userName} 's To-Do List`;
}
