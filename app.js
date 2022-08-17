const app = Vue.createApp({
    // data, function
    // template:'<h2>I am a template<h2>'
    data() {
        return {
            showBook : true,
            title: 'The final Empire',
            author: 'Brandon Sanderson',
            age : 45
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'you click Me';
            this.title = title
        },
        toggleShowBooks() {
            this.showBook = !this.showBook
        }

        
    }

})

app.mount('#app');