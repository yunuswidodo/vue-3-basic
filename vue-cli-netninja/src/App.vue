<script setup>
</script>

<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        title: 'My Fist Vue App Yunus'
      }
    },
    methods:{
      handleClick(){
        console.log(this.$refs.name);
        // menambah class pada componen
        this.$refs.name.classList.add('active');
        this.$refs.name.focus();
        // sampai video ke  3 menit ke 29.34
      }
    }
  }
</script>
<style scoped>
    h1 {
      border-bottom:1px solid #ddd ;
      display: inline-block;
      padding-bottom: 10px;
    }
</style>
