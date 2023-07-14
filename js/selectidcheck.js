// LocalStorage transfer to JSON completed

if (localStorage.getItem("selectedid") == null) {
    localStorage.setItem("selectedid", null)
}

alltodos4 = JSON.parse(localStorage.getItem("todos")).todos
let selectedid2 = 1

alltodos4.forEach(todoname2 => {
    if (localStorage.getItem(selectedid2) == null) {
        if (todoname2 != "") {
            localStorage.setItem(selectedid2, ",")          
        }
    }
    selectedid2 += 1
});


document.getElementById(("todoitem"+localStorage.getItem("selectedid"))).style.backgroundColor="#999977"
