<template>
    <div class="backdrop"> 
      <div class="modal">
        <h1>Modal Title</h1>
        <p>modal content</p>
      </div>
    </div>
</template>

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
</style>