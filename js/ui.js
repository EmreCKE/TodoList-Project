class UI{
    addTodoToUI(todo){
        const todoList = document.getElementById('todo-list');

        todoList.innerHTML += `<div class="todo">
        <div class="todo-text">${todo}</div>
        <a href="#" id="delete-button">Sil</a>
        </div>`
    }
    deleteTodoFromUI(element){
        element.parentElement.remove();
    }
    clearAllTodosFromUI(){
        const todoList = document.getElementById('todo-list');

        while(todoList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }
    }
    loadAllTodos(todos){
        const todoList = document.getElementById('todo-list');
        
        todos.forEach(function(todo){
            todoList.innerHTML += `<div class="todo">
            <div class="todo-text">${todo}</div>
            <a href="#" id="delete-button">Sil</a>
            </div>`;
        });
    }
    
    clearInputs(element){
        element.value = '';
    }
}
