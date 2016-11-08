<!-- only knows if it is completed... everything else is determined by parent -->
<template>
  <div class="todo" v-bind:class="{ iscompleted: completed }">
    <input v-on:click="checkTodo" type="checkbox">
    <span>{{ content }}</span>
  </div>
</template>

<script>

export default {
  name: 'todo',
  props: [
    'content'
  ],
  data () {
    return {
      completed: false
    }
  },
  methods: {
    checkTodo: function() {
      if(this.completed) {
        this.completed = false;
      }
      else {
        this.completed = true;
      }
    }
  }
}
</script>

<style>
.iscompleted {
  text-decoration: line-through;
}

/* this should go away with the proper implementation of a store */
.iscompleted + button {
  display: none;
}

.todo {
  display: inline-block;
}

</style>
