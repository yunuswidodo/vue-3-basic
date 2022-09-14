<script setup>
  import Modal from './components/Modal.vue';
</script>

<template>
  <h1>{{title}}</h1>
  <p>Welcome</p>
  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="">sign up now</a>
          <a href="">more info</a>
        </template>
        <h1>Ninja Givaway</h1> 
        <p>Grab your Ninja Swag For Half Price!</p>
    </Modal>
  </teleport>
  <teleport to="#modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
        <h1>Sign Up to newsletter</h1> 
        <p>For Update and promo code</p>
    </Modal>
  </teleport>

  <button @click.alt="toggleModal">Open Modal(alt)</button>
  <button @click="toggleModalTwo">Open Modal</button>
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
        showModal: false,
        showModalTwo: false

      }
    },
    methods:{
      toggleModal(){
        this.showModal = !this.showModal
      },
      toggleModalTwo(){
        this.showModalTwo = !this.showModalTwo
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
