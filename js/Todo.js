// console.log("hi");

let toDoList = []

const addBtnElement = document.querySelector('.js-btn')
// console.log(addBtnElement);

const addToDo = function () {
    // console.log("done");
    const toDoNameElement = document.querySelector('.js-name-input')
    const toDoName = toDoNameElement.value
    // console.log(toDoName);


    const dateInputElement = document.querySelector('.js-due-date-input')
    // console.log(dateInputElement);
    const dateInput = dateInputElement.value
    // console.log(dateInput);

    // NOTE: Create Date objects for comparison
    const dateInputConvertObj = new Date(dateInput)
    const now = new Date()
    console.log(now);

    if (!toDoName || !dateInput) {
        alert("Please fill out both the todo name and date");
        return; // Exit the function early
    }else if(dateInputConvertObj < now){
        alert("pls enter a valid date")
    }else {
        let toDoObj = {
            name: toDoName,
            date: dateInput
        }
        // console.log(toDoObj);
        toDoList.push(toDoObj)
        // console.log(toDoList);
        
        sortToDoList()
        showToDoList(toDoList)

        document.querySelector('.js-name-input').value = ''
        document.querySelector('.js-due-date-input').value = ''
    }
}

function showToDoList(arr) {
    const  toDoListElement = document.querySelector('.js-todo-list')
    // console.log(toDoListElement);
    let html = ''
    for (let i = 0; i < arr.length ; i++) {
        let toDo = arr[i]
        let htmlElement = `
        <div data-index="${i}">${toDo.name}</div>
        <div data-index="${i}">${toDo.date}</div>
        <button  onclick="deleteBtn(${i})" class="delete-todo-button js-delete">Delete</button>
        `
        html += htmlElement
    }
    toDoListElement.innerHTML = html
}


function deleteBtn(index) {
    // console.log("deleted");
    toDoList.splice(index,1)
    sortToDoList()
    showToDoList(toDoList)
}



function sortToDoList() {
    toDoList.sort((a,b) => new Date(a.date) - new Date(b.date))
}





addBtnElement.addEventListener('click', addToDo)

