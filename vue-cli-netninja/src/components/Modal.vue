<template>
    <div class="backdrop" @click="closeModal"> 
      <div class="modal" :class="{sale: theme === 'sale'}">
        <!-- using prop -->
        <h1>{{header}}</h1>
        <p>{{text}}</p>
      </div>
    </div>
</template>

<script>
export default {
<<<<<<< HEAD
    // registasi componen pada page app vue
    props:['header', 'text', 'theme'],
    methods: {
        closeModal(){
            this.$emit('close');
=======
    methods:{
        closeModal(){
            // emit adalah pengemangan di panggil di app.Vue
            this.$emit('close')
>>>>>>> 76daeb0b437bbe29d31e165a0e59fb0598b72fcf
        }
    }
}
</script>

<style scoped>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: red;
        border-radius:10px ;
    }

    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    h1{
        color: #03cfb4;
        border: none;
        padding: none;
    }

    p {
        font-style: normal;
    }

    .modal.sale{
        background: crimson;
        color: white;
    }

    .modal.sale h1 {
        color: white;
    }
</style>