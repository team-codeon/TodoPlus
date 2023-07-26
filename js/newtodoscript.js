// LocalStorage transfer to JSON completed

function addtodoafterselect() {
  let todoname3 = document.getElementById("todonamesetform").value;
  if (todoname3 == "") {
    todoname3 = "New Todo";
  }

  localStorage.setItem(
    JSON.parse(localStorage.getItem("todos")).todos.length + 1,
    JSON.stringify({ tasks: [] })
  );
  const alltodos = JSON.parse(localStorage.getItem("todos")).todos;
  if (alltodos != []) {
    newnameupload = JSON.parse(localStorage.getItem("todos")).todos;
    newnameupload.push(todoname3);
    localStorage.setItem("todos", JSON.stringify({ todos: newnameupload }));
  } else {
    localStorage.setItem("todos", JSON.stringify({ todos: [todoname3] }));
  }

  document.getElementById("todos").innerHTML = "";
  let id = 1;

  const alltodos2 = JSON.parse(localStorage.getItem("todos")).todos;
  if (alltodos2 != "") {
    alltodos2.forEach((todoname) => {
      if (todoname != "") {
        const box = `
        <div class="todoback">
          <div class="todo" onclick="updateselect(${id})" id="todoitem${id}" onmouseover="updaterightclickcontent('todo',${id})" onmouseout="resetrightclickcontent()">
              <h4 class = "menutodostext">${todoname}</h4>
          </div>
          
          <div style = "height: 0.3vw;"></div>
        </div>
        `;

        document.getElementById("todos").innerHTML += box;
        id += 1;
      }
    });
  }

  const box = `
    <div class="todonameset" id="todonameset">
      <form onkeydown="return event.key != 'Enter';" style="display: inline; height: 10%;">
        <input class="todonamesetform" type="text" placeholder="New Todo" id="todonamesetform" onblur="addtodoafterselect()">
      </form>
      <div style="height: 0.3vw"></div>
    </div>
  
    
  
    <div class="addtodo" onclick = "addtodo()">
      <h4>Add todo</h4>
    </div>
  `;

  document.getElementById("todos").innerHTML += box;
  document.getElementById(
    "todoitem" + localStorage.getItem("selectedid")
  ).style.backgroundColor = "#999977";
  updateselect(id - 1);
}

function addtodo() {
  document.getElementById("todonameset").style.display = "block";
  document.getElementById("todonamesetform").focus();
}

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    if (document.activeElement === document.getElementById("todonamesetform")) {
      document.getElementById("todonamesetform").blur();
    }
  }
});

document.addEventListener("keyup", (evt) => {
  if (evt.key === "Escape") {
    if (document.activeElement === document.getElementById("todonamesetform")) {
      document.getElementById("todonamesetform").value = "";
      document.getElementById("todonamesetform").blur();
    }
  }
});
