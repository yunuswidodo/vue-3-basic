<script setup>
  import Modal from './components/Modal.vue';
</script>

<template>
  <h1>{{title}}</h1>
  <p>Welcome</p>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
  </div>
  <button @click.alt="toggleModal">Open Modal(alt)</button>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
</template>

<script>
  export default {
    name: 'App',
    components : {
      Modal
    },
    data() {
      return {
        title: 'My Fist Vue App Yunus',
        header: 'Sign up for the Giveway!',
        text: 'Grab your ninja swag for half price!',
        showModal: false

      }
    },
    methods:{
      toggleModal(){
        this.showModal = !this.showModal
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
