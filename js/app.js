const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todo');
const main = document.getElementById('main');
eventListeners();

const storage = new Storage();
const ui = new UI();
function eventListeners(){
    todoForm.addEventListener('submit',addTodo);
    document.addEventListener('DOMContentLoaded', function(){
        let todos = storage.getTodosFromStorage();
        ui.loadAllTodos(todos);
    });
    main.addEventListener('click',deleteTodo);
}


function addTodo(e){
    const todo = todoInput.value;
    
    if(todo === ''){
        console.log('Bosluk var ');
    }else{
        ui.addTodoToUI(todo);
        storage.addTodoToStorage(todo);
    }
    ui.clearInputs();
    e.preventDefault();
}

function deleteTodo(e){
     if(e.target.id === "delete-button"){
        ui.deleteTodoFromUI(e.target);
        storage.deleteTodoFromStorage(e.target.previousElementSibling.innerHTML);
    }
}