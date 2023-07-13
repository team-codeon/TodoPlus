function tasksadd() {
    document.getElementById("taskspart").innerHTML = ""
    const content = localStorage.getItem(localStorage.getItem("selectedid")).split(",")
    let taskid = 1

    content.forEach(item => {
        if (item != "") {
        const box = `
            <div class="tasksitem" id="todoitem${localStorage.getItem("selectedid")}.${taskid.toString()}" onclick="completetask('${localStorage.getItem("selectedid")}.${taskid.toString()}')">
            <table class="taskdetailscontainer">
            <tr>
                <th class="checkbox-container">
                    <div class="checkbox">
                        <div class="tick" id="tick${localStorage.getItem("selectedid")}.${taskid.toString()}"></div>
                    </div>
                </th>
                <th class="tasktext-container">
                    <p class="tasktext" id="tasktextitem${localStorage.getItem("selectedid")}.${taskid.toString()}">${item}</p>
                </th>
            </tr>
            
            </div>
            `
            taskid += 1
            document.getElementById("taskspart").innerHTML += box
        }
        
    });
}

tasksadd()

function completetask(taskkey) {
    document.getElementById("tick"+taskkey).classList.add("checkedtick")
    document.getElementById("tasktextitem"+taskkey).classList.add("completedtask")
}