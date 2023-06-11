/* To do: add a form to add todo name */

function addtodo() {
    if (alltodos != "")
    localStorage.setItem("todos",localStorage.getItem("todos")+","+"John Doe"/*Change to user choice of todo name*/)
}
