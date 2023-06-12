/* To do: add a form to add todo name */

function addtodo() {
    if (alltodos != "") {
        localStorage.setItem("todos",localStorage.getItem("todos")+"John Doe"+","/*Change to user choice of todo name*/)
    }

    else {
        localStorage.setItem("todos","John Doe"+",")
    };

    document.getElementById("todos").innerHTML = ""

    const alltodos2 = localStorage.getItem("todos").split(",");
    if (alltodos2 != "") {
      alltodos2.forEach(todoname => {
        if (todoname != "") {
        const box = `
          <div class="todo">
            <h4 class = "menutodostext">`+ todoname + `</h4>
          </div>
          
          <div style = "height: 5px;"></div>
          `;
        document.getElementById("todos").innerHTML += box;}
      });
    }
    
    const box = `
      <div class="addtodo" onclick = "addtodo()">
      <h4>Add todo</h4>
      </div>
    `;
    
    document.getElementById("todos").innerHTML += box;
}
