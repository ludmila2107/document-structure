2
let buttonAdd = document.querySelector(".tasks__add");
let listOfTask = document.querySelector(".tasks__list");
let inPut = document.querySelector(".tasks__input");
let task;

buttonAdd.addEventListener("click", createDeal);

function createDeal() {


    task = document.createElement("div");
    task.className = "task";

    let taskTitle = document.createElement("div");
    taskTitle.className = "task__title";
    taskTitle.innerText = inPut.value;


    let removeTask = document.createElement("a");
    removeTask.className = "task__remove";
    removeTask.innerHTML = "&times;";
    removeTask.href = "#";

    if (taskTitle.innerText.trim()) {
        listOfTask.append(task);
        task.append(taskTitle);
        task.append(removeTask);
    }

    inPut.value = "";
    removeTask.addEventListener("click", deleteTask);

    event.preventDefault(event);

}

function deleteTask() {
    this.closest('div').remove()

}