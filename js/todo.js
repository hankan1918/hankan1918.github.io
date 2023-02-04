const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todoList");
const TODOS_KEY = "todos";

let todoS = [];

function saveTodo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todoS));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    todoS = todoS.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodo();
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✔";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoobj ={
        text: newTodo,
        id: Date.now()
    };
    todoS.push(newTodoobj);
    paintTodo(newTodoobj);
    saveTodo();
}
todoForm.addEventListener("submit", handleToDoSubmit);
 
const SavedTodos = (localStorage.getItem(TODOS_KEY));

if(SavedTodos){
    const parsedTodos = JSON.parse(SavedTodos);
    todoS = parsedTodos;
    parsedTodos.forEach(paintTodo);
}