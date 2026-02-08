

interface Task {
    id:number;
    title:string;
    isCompleted:boolean;
}

let tasks:Task[] = [];

const toDoInput = document.querySelector("#todo-input") as HTMLInputElement;
const addBtn = document.querySelector("#add-btn") as HTMLButtonElement;
const toDoList = document.querySelector("#todo-list") as HTMLUListElement;

addBtn.addEventListener("click",() => {
    const inp:string = toDoInput.value;
    if(inp===""){
        return
    }
    const newTask:Task = {
        id: Date.now(),
        title:inp,
        isCompleted:false
    };
    tasks.push(newTask);
    toDoInput.value = "";
    renderTasks();
});

const renderTasks = () => {
    toDoList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = task.title;
        toDoList.appendChild(li);
    });

}