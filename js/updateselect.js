function updateselect(idnumber) {
  document.getElementById(
    "todoitem" + localStorage.getItem("selectedid")
  ).style.backgroundColor = "#d4d4a6";

  localStorage.setItem("selectedid", idnumber);

  document.getElementById(
    "todoitem" + localStorage.getItem("selectedid")
  ).style.backgroundColor = "#999977";
}
