class Storage{

    getTodosFromStorage(){
        let todos;
        if(localStorage.getItem('todos')===null){
            todos=[];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        return todos;
    }

    addTodoToStorage(todo){
        let todos = this.getTodosFromStorage();

        todos.push(todo);

        localStorage.setItem('todos',JSON.stringify(todos));
    }

    deleteTodoFromStorage(selectedTodo){
        let todos = this.getTodosFromStorage();

        todos.forEach(function(todo,index){
            if(todo === selectedTodo){
                todos.splice(index,1);
            }
        });
        localStorage.setItem('todos',JSON.stringify(todos));
    }

    clearAllTodosFromStorage(){
        localStorage.removeItem('todos');
    }
}