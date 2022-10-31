<template>
    <h1>Jobs Details Page</h1>
    <p>The Job id is {{id}}</p>
</template>

<script>
export default {
    data(){
        return {
            // parameter id sama dengan yang ada di root ((ID))
            id: this.$route.params.id
        }
    }
}
</script>

<style>

</style>