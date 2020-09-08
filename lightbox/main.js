var vm = new Vue({
    el: '#app',
    data: {
        src: null,
        isShow: false,
    },
    methods: {
        zoom: function (event) {
            this.src = event.currentTarget.getAttribute('href');
            this.isShow = true;
        },
        close: function () {
            this.isShow = false;
        },
        afterLeave: function () {
            this.src = null;
        }
    }
})