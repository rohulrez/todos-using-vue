
const TodoApp = {
    data() {
        return {
            todos: [],
            enteredTodoText: '',
            editedTodoId : null
        }
    },
    methods:{
        saveTodo(event) {
            event.preventDefault();
            if (this.editedTodoId) {
                const todoId = this.editedTodoId;
                const todoIndex = this.todos.findIndex(function(todoItem) {
                    return todoItem.id === todoId;
                });

                const updatedTodoItem = {
                    id: this.todos[todoIndex].id,
                    text: this.enteredTodoText
                }

                this.todos[todoIndex] = updatedTodoItem;
                this.editedTodoId =null;
            } else {
                const newTodo = {
                    text: this.enteredTodoText,
                    id: new Date().toISOString()
                };
    
                this.todos.push(newTodo);
    
                this.enteredTodoText = '';
            }
            
        },

        startEditTodo(todoID){
            this.editedTodoId = todoID;
            const todo = this.todos.find(function(todoItem) {
                return todoItem.id === todoID
            })

            this.enteredTodoText = todo.text;
        },

        deleteTodo(todoId) {
            this.todos = this.todos.filter(function(todoItem) {
                return todoItem.id !== todoId;
            })
        }
    }
};

Vue.createApp(TodoApp).mount('#todos-app')