var tasks = [];
var toDoInput = document.querySelector("#todo-input");
var addBtn = document.querySelector("#add-btn");
var toDoList = document.querySelector("#todo-list");
addBtn.addEventListener("click", function () {
    var inp = toDoInput.value;
    if (inp === "") {
        return;
    }
    var newTask = {
        id: Date.now(),
        title: inp,
        isCompleted: false
    };
    tasks.push(newTask);
    toDoInput.value = "";
    rederTasks();
});
var rederTasks = function () {
    toDoList.innerHTML = "";
    tasks.forEach(function (task) {
        var li = document.createElement('li');
        li.innerHTML = task.title;
        toDoList.appendChild(li);
    });
};
