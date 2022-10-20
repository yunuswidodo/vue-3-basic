<template>
  <SigupForm/>
</template>

<script>
import SigupForm from './components/signupForm.vue';
export default {
  name: 'App',
  components: {
    SigupForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  margin: 0;
  background: #eee;

}
</style>
