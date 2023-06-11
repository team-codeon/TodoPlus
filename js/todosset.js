const todos = localStorage.getItem("todos")

if (todos == null) {
    localStorage.setItem("todos", "")
}