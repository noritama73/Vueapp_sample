Vue.component('tab-A', {
    template: `
    <div>
        <p>aaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaa</p>
        <p>aaaaaaaaaaaaaaaaaaaa</p>
    </div>
    `
});

Vue.component('tab-B', {
    template: `
    <div>
        <p>bbbbbbbbbbbbbbbbbbbb</p>
        <p>bbbbbbbbbbbbbbbbbbbb</p>
        <p>bbbbbbbbbbbbbbbbbbbb</p>
    </div>
    `
});

var vm = new Vue({
    el: '#app',
    data: {
        active: 'A',
        items: {
            A: "A's text",
            B: "B's text",
        },
    },
    computed: {
        activeTabComponent: function () {
            return 'tab-' + this.active;
        }
    },
    methods: {
        activate: function (key) {
            this.active = key;
        }
    },
})