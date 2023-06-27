function addtodoafterselect() {
  let todoname3 = document.getElementById("todonamesetform").value;
  if (todoname3 == "") {
    todoname3 = "New Todo";
  }

  localStorage.setItem( localStorage.getItem("todos").split(",").length-1,",")

  if (alltodos != "") {
    localStorage.setItem(
      "todos",
      localStorage.getItem("todos") + todoname3 + ","
    );
  } else {
    localStorage.setItem("todos", todoname3 + ",");
  }

  document.getElementById("todos").innerHTML = "";
  const alltodos2 = localStorage.getItem("todos").split(",");

  let id = 1
  if (alltodos2 != "") {
    alltodos2.forEach((todoname) => {
      if (todoname != "") {
        const box = `
        <div class="todoback">
          <div class="todo" onclick="updateselect(`+id+`)" id="todoitem`+id+`">
            <h4 class = "menutodostext">` + todoname + `</h4>
          </div>
          
          <div style = "height: 5px;"></div>
        </div>
        `;
        document.getElementById("todos").innerHTML += box;
      }
    });
  }

  const box = `
        <div class="todonameset" id="todonameset">
            <form onkeydown="return event.key != 'Enter';" style="display: inline; height: 10%;">
                <input class="todonamesetform" type="text" placeholder="New Todo" id="todonamesetform" onblur="addtodoafterselect()">
            </form>
        </div>
        <div style="height: 5px"></div>

        <div class="addtodo" onclick = "addtodo()">
            <h4>Add todo</h4>
        </div>
    `;

  document.getElementById("todos").innerHTML += box;
  document.getElementById(("todoitem"+localStorage.getItem("selectedid"))).style.backgroundColor="#999977"
}

function addtodo() {
  document.getElementById("todonameset").style.display = "block";
  document.getElementById("todonamesetform").focus();
}