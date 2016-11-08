import Vue from 'vue'
import App from './App.vue'
import TodoList from './TodoList.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
	el: '#todolist',
	render: h => h(TodoList)
})
