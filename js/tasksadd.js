content = localStorage.getItem(localStorage.getItem("selectedid")).split(",")
let taskid = 1;
content.forEach(item => {
    const box = `
        <div class="taskitem" id="taskitem`+localStorage.getItem("selectedid")+"."+taskid+`">
            <div class="checkbox-outside"><div class="checkbox"></div></div>
            <p class="taskname">`+item+`</p>
        </div>
        <div style="height: 0.3vw"></div>
    `

    document.getElementById("taskspart").innerHTML += box
    taskid += 1
});