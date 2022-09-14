<template>
    <div class="backdrop" @click.self="closeModal"> 
      <div class="modal" :class="{sale: theme === 'sale'}">
        <slot>default content</slot>
        <div class="actions">
            <slot name="links"></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    // registasi componen pada page app vue
    props:['theme'],
    methods:{
        closeModal(){
            // emit adalah pengemangan di panggil di app.Vue
            this.$emit('close');
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
        background: white;
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

<style>
    .actions {
        color: #333;
        text-align: center;
        margin: 30px 0 10px 0;
    }

    .actions a {
        color: #333;
        padding: 8px;
        border: solid 1px #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }

    
</style>