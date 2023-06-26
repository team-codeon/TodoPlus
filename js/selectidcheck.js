if (localStorage.getItem("selectedid") == null) {
    localStorage.setItem("selectedid",'nil')
}

alltodos4 = localStorage.getItem("todos").split(',')
let selectedid2 = 0

alltodos4.forEach(todoname2 => {
    if (localStorage.getItem(selectedid2) == null) {
        if (todoname2 != "") {
            localStorage.setItem(selectedid2, ",")          
        }
    }
    selectedid2 += 1
});


document.getElementById(("todoitem"+localStorage.getItem("selectedid"))).style.backgroundColor="#999977"