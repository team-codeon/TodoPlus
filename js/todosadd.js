// LocalStorage transfer to JSON completed

document.getElementById("todos").innerHTML = ""
let id = 1
let type = `'todo'`


const alltodos = JSON.parse(localStorage.getItem("todos")).todos;
if (alltodos != []) {
  alltodos.forEach((todoname) => {
    if (todoname != "") {
      const box = `
      <div class="todoback">
      <div class="todo" onclick="updateselect(`+id+`)" id="todoitem`+id+`" onmouseover="updaterightclickcontent('todo',`+ id +`)" onmouseout="resetrightclickcontent()">
            <h4 class = "menutodostext">`+ todoname + `</h4>
        </div>
        
        <div style = "height: 0.3vw;"></div>
      </div>
      `;

      document.getElementById("todos").innerHTML += box;
      id+=1
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
document.getElementById(("todoitem"+localStorage.getItem("selectedid"))).style.backgroundColor="#999977"