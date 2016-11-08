
<template>
  <div id="todolist">
    <h3>{{ title }}</h3>
    <input class="add-todo" type="text" v-model="todoText" placeholder="Enter a new todo" v-on:keyup.enter="addTodo">
    <button class="add-todo-button" type="button" v-on:click="addTodo">Add Todo</button>
    <ul v-for="(todo, index) in todos">
      <li>
        <todo :content="todo.text" :completed="todo.completed"></todo>
        <button v-show="!todo.completed" type="button" v-on:click="removeTodo(index)">Remove</button>
      </li>
    </ul>

  </div>
</template>

<script>

import Todo from './Todo.vue';

export default {
  name: 'todolist',
  components: {
    Todo
  },
  data () {
    return {
      title: 'To Do list component',
      todoText: '',
      todos: [
        {
          text: "first todo item"
        }
      ]
    }
  },
  methods: {
    addTodo: function() {
      var todoText = this.todoText.trim();
      if (todoText) {
        this.todos.push({ text: todoText });
        this.todoText = '';
      }
    },
    removeTodo: function(index) {
      this.todos.splice(index, 1);
    }
  }
}
</script>

<style>
#todolist {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 30px;
}

ul {
  list-style-type: none;
  padding: 0;
  font-size: 18px;
}

.add-todo {
  line-height: 24px;
  width: 50%;
  font-size: 16px;
  padding: 4px;
}

button {
  font-size: 14px;
  padding: 8px;
  color: #444; /* rgba not supported (IE 8) */
  color: rgba(0, 0, 0, 0.80); /* rgba supported */
  border: 1px solid #999;  /*IE 6/7/8*/
  border: none rgba(0, 0, 0, 0);  /*IE9 + everything else*/
  background-color: #E6E6E6;
  text-decoration: none;
  border-radius: 4px;
}

</style>
