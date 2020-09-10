Vue.component('errors', {
    props: ['errors'],
    template: `
        <div class="errors" v-if="errors">
            <div class="error" v-for="error in errors">{{error}}</div>
        </div>
    `
})

Vue.component('message', {
    template: `
    <div>
        <div class="message" v-for="(chat, index) in chats">
            <div class="propaty">
                <div>From:{{chat.from}}</div>
                <div>To:{{chat.to}}</div>
            </div>
            <div class="body">
                <div>{{chat.text}}</div>
                <button class="button-outline" @click.stop.prevent="remove(index)">削除</button>
            </div>
        </div>
    </div>
    `,
    props: ['chats'],
    methods: {
        remove(index) {
            this.chats.splice(index, 1)
        }
    }
})


new Vue({
    el: '#app',
    data: {
        chats: {
            from: '',
            to: '',
            text: '',
        },
        errors: {
            from: [],
            to: [],
            text: [],
        },
        showChats: [],
        isAdd: true,
    },
    methods: {
        remove(index) {
            this.chats.splice(index, 1)
        },
        addMessage(showChats) {
            this.errors.from = [];
            this.errors.to = [];
            this.errors.text = [];
            var isAdd = true;

            if (!this.chats.from) {
                this.errors.from.push('送り名が入力されていません');
                isAdd = false;
            }
            if (!this.chats.to) {
                this.errors.to.push('宛名が入力されていません');
                isAdd = false;
            }
            if (!this.chats.text) {
                this.errors.text.push('本文が入力されていません');
                isAdd = false;
            }

            if (isAdd) {
                this.showChats.push(Vue.util.extend({}, showChats));
            }
        }
    }
});