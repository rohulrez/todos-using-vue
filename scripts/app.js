const TodoApp = {
    data() {
        return {
            newTodo: 'Learn Vue.js'
        }
    },
    methods:{
        saveTodo() {

        }
    }
};

Vue.createApp(TodoApp).mount('#todos-app')