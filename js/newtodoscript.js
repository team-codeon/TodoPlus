function addtodoafterselect() {
  let todoname3 = document.getElementById("todonamesetform").value;
  if (todoname3 == "") {
    todoname3 = "New Todo";
  }

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
  if (alltodos2 != "") {
    alltodos2.forEach((todoname) => {
      if (todoname != "") {
        const box =
          `
                <div class="todo">
                    <h4 class = "menutodostext">` +
          todoname +
          `</h4>
                </div>
                
                <div style = "height: 5px;"></div>
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
            <img src="/media/checkmark.svg" class="checkmark" onclick="addtodoafterselect()">
        </div>
        <div style="height: 5px"></div>

        <div class="addtodo" onclick = "addtodo()">
            <h4>Add todo</h4>
        </div>
    `;

  document.getElementById("todos").innerHTML += box;
}

function addtodo() {
  document.getElementById("todonameset").style.display = "block";
  document.getElementById("todonamesetform").focus();
}
