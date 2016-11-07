
<template>
  <div id="todolist">
    <h3>{{ title }}</h3>

    <ul v-for="(todo, index) in todos">
      <li>
        <todo v-bind:todo="todo"></todo><button type="button" v-on:click="removeTodo(index)">Remove</button>
      </li>
    </ul>
    <input type="text" v-model="todoText" v-on:keyup.enter="createTodo">

  </div>
</template>

<script>
import Todo from './Todo.vue';

export default {
  name: 'todolist',
  data () {
    return {
      title: 'To Do list',
      todoText: '',
      todos: []
    }
  },
  components: {
    Todo
  },
  methods: {
    createTodo: function() {
      var todoText = this.todoText.trim();
      if (todoText) {
        this.todos.push({ title: todoText });
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

</style>
