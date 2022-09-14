<script setup>
  import Modal from './components/Modal.vue';
</script>

<template>
  <h1>{{title}}</h1>
  <p>Welcome</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="">sign up now</a>
          <a href="">more info</a>
        </template>
        <h1>Ninja Givaway</h1> 
        <p>Grab your Ninja Swag For Half Price!</p>
    </Modal>
  </div>
  <button @click.alt="toggleModal">Open Modal(alt)</button>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>
</template>
<!-- sampai video ke 5 menit ke 34.57-->
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
