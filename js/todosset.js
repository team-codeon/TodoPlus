// LocalStorage transfer to JSON completed

const todos = localStorage.getItem("todos");

if (todos == null) {
  localStorage.setItem("todos", JSON.stringify({ todos: [] }));
}
