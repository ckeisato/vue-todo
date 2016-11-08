<template>
  <div>
    <span v-show="!inEditMode">{{title}}</span>
    <input v-show="inEditMode">
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "",
      inEditMode: false
    }
  },
  methods: {
    clicked: function() {
      this.inEditMode = true;
    }
  }
}
</script>

<style>

</style>