document.getElementById("todos").innerHTML = ""

const alltodos = localStorage.getItem("todos").split(",");
if (alltodos != "") {
  alltodos.forEach(todoname => {
    const box = `
      <div class="todo">
        <h4 class = "menutodostext">`+ todoname + `</h4>
      </div>
      
      <div style = "height: 5px;"></div>
      `;
    document.getElementById("todos").innerHTML += box;
  });
}

const box = `
  <div class="addtodo" onclick = "addtodo()">
  <h4>Add todo</h4>
  </div>
`;

document.getElementById("todos").innerHTML += box;