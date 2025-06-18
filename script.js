const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")
// const means we're storing them in variables to use later
//document is used to access the element from the HTML page 

function addTask() {
    if (inputBox.value === '' ) {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; // empties the search after u click add
    saveData(); //calling the function 
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() { // saves list when u refresh 
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() { // opens the list when u exit the broswer 
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); //calling the function