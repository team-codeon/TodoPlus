// LocalStorage transfer to JSON completed

function updateselect(idnumber) {
  // Update colour of Todo
  if (localStorage.getItem("selectedid") != "null") {
    document.getElementById(
    "todoitem" + localStorage.getItem("selectedid")
  ).style.backgroundColor = "#d4d4a6";
  }

  localStorage.setItem("selectedid", idnumber);

  document.getElementById(
    "todoitem" + localStorage.getItem("selectedid")
  ).style.backgroundColor = "#999977";


  // Update Todo name display
  document.getElementById("tasksname").innerHTML = JSON.parse(localStorage.getItem("todos")).todos[idnumber-1];
  
  // Update tasks
  tasksadd()
}
