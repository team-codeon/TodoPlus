// LocalStorage transfer to JSON completed

function tasksadd() {
  document.getElementById("taskspart").innerHTML = "";
  const content = JSON.parse(
    localStorage.getItem(localStorage.getItem("selectedid"))
  ).tasks;
  let taskid = 1;

  content.forEach((item) => {
    if (item.name != "") {
      const box = `
            <div class="tasksitem" id="todoitem${localStorage.getItem(
              "selectedid"
            )}.${taskid.toString()}" onclick="completetask('${localStorage.getItem(
        "selectedid"
      )}.${taskid.toString()}')">
            <table class="taskdetailscontainer">
            <tr>
                <th class="checkbox-container">
                    <div class="checkbox">
                        <div class="tick" id="tick${localStorage.getItem(
                          "selectedid"
                        )}.${taskid.toString()}"></div>
                    </div>
                </th>
                <th class="tasktext-container">
                    <p class="tasktext" id="tasktextitem${localStorage.getItem(
                      "selectedid"
                    )}.${taskid.toString()}">${item.name}</p>
                </th>
            </tr>
            
            </div>
            `;
      taskid++;
      document.getElementById("taskspart").innerHTML += box;
    }
  });
}

updateselect(localStorage.getItem("selectedid"));

function completetask(taskkey) {
  document.getElementById("tick" + taskkey).classList.add("checkedtick");
  document
    .getElementById("tasktextitem" + taskkey)
    .classList.add("completedtask");
}
