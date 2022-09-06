<script setup>
  import Modal from './components/Modal.vue';
</script>

<template>
  <div v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        <h1> My Fist Vue App Yunus, </h1>
        <p>Sign up for the Giveway! </p>
      </Modal>
  </div>

  <button @click="toggleModal">open modal</button>

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
      handleClick(){
        console.log(this.$refs.name);
        // menambah class pada componen
        // $nerfd => similar of key || mengendle focus pada saat tombol di clik
        this.$refs.name.classList.add('active');
        this.$refs.name.focus();
      },
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
