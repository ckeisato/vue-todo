
<template>
  <div id="todolist">
    <h3>{{ title }}</h3>

    <ul v-for="(todo, index) in todos">
      <li>
        <todo></todo>
        <input v-on:click="checkTodo(index)" type="checkbox">
        <span>{{ todo.text }}</span>
        <button type="button" v-on:click="removeTodo(index)">Remove</button>
      </li>
    </ul>
    <input type="text" v-model="todoText" placeholder="Enter a new todo" v-on:keyup.enter="addTodo">
    <button type="button" v-on:click="addTodo">Add Todo</button>

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
      title: 'To Do list',
      todoText: '',
      todos: [
        {
          text: "hello",
          completed: false
        }
      ]
    }
  },
  methods: {
    addTodo: function() {
      var todoText = this.todoText.trim();
      if (todoText) {
        this.todos.push({ text: todoText, completed: false });
        this.todoText = '';
      }
    },
    removeTodo: function(index) {
      this.todos.splice(index, 1);
    },
    checkTodo: function(index) {
      if (this.todos[index].completed) {
        this.todos[index].completed = false;
      }
      else {
        this.todos[index].completed = true;
      }
    }
  }
}
</script>

<style>

</style>
