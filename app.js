const app = Vue.createApp({
    // data, function
    // template:'<h2>I am a template<h2>'
    data() {
        return {
            showBook : true,
            title: 'The final Empire',
            author: 'Brandon Sanderson',
            age : 45,
            x : 0,
            y : 0,
            books : [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/kucing-hitam.jpg', isFav: true},
                {title: 'name way of kings', author: 'brandon sanderson', img: 'assets/kucing-loreng.jpg', isFav: false},
                {title: 'final war 2', author: 'brandon sanderson', img: 'assets/kucing-putih.jpg', isFav: true},
            ],
            url: 'https://netninja.dev',
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'you click Me';
            this.title = title
        },
        toggleShowBooks() {
            this.showBook = !this.showBook
        },
        handleEvent(e, data){
            console.log(e, e.type);
            if (data){
                console.log(data);
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }

        
    }

})

app.mount('#app');