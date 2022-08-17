const app = Vue.createApp({
    // data, function
    // template:'<h2>I am a template<h2>'
    data() {
        return {
            title: 'The final Empire',
            author: 'Brandon Sanderson',
            age : 45
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'you click Me';
            this.title = title
        }
    }

})

app.mount('#app');