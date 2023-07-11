const content = localStorage.getItem(localStorage.getItem("selectedid")).split(",")
let taskid = 1

content.forEach(item => {
    const box = `
    <div class="tasksitem" id="todoitem`+localStorage.getItem("selectedid")+"."+taskid.toString()+`">
    <table class="taskdetailscontainer">
    <tr>
        <th class="checkbox-container">
            <div class="checkbox"></div>
        </th>
        <th class="tasktext-container">
            <p class="tasktext">`+item+`</p>
        </th>
    </tr>
    
    </div>
    `
    taskid += 1
    document.getElementById("taskspart").innerHTML += box
});