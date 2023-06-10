const box = `
  <div class="todo">
    <button class="todo-button"><p id="todoname"></p></button>
  </div>`;

document.getElementById("todos").innerHTML += box;
document.getElementById("todoname").innerHTML = 'Hello';