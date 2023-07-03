function tasksadd() {
    content = localStorage.getItem(localStorage.getItem("selectedid")).split(",")
    taskid = 1
    content.forEach(task => {
        const box = `
            <div class="taskitem" id="taskitem`+taskid+`>
                <h5>`+task+`</h5>
            </div>
        `;

        document.getElementById("taskspart").innerHTML += box;
    });
}

tasksadd()