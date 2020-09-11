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
                <div>ID:{{chat.id}}</div>
                <div>From:{{chat.from}}</div>
                <div>To:{{chat.to}}</div>
            </div>
            <div class="body">
                <div>{{chat.text}}</div>
                <button class="button-outline" @click.stop.prevent="remove(index)">削除</button>
                <button class="button-outline" @click.stop.prevent="reply">返信</button>
                <div v-show="chat.replyText">>>{{chat.id}}</div>
                <div class="accordion" v-show="chat.isReply">
                    <input type="text" name="chat.replyFrom" id="chat.replyFrom" v-model="chat.replyFrom">
                    <textarea name="chat.replyText" id="chat.replyText" v-model="chat.replyText"
                　   rows="8" cols="80" placeholder="本文を入力してください"></textarea>
                    <button class="button-outline" @click="addReply">送信</button>
                </div>
            </div>
        </div>
    </div>
    `,
    props: {
        chats: Array,
    },
    methods: {
        remove(index) {
            this.chats.splice(index, 1);
        },
        reply() {
            this.chats.isReply = true;
            this.showChats.push(Vue.util.extend({}, showChats));
        },
        addReply() {
            this.chats.isReply = false;
            this.showChats.push(Vue.util.extend({}, showChats));
        }
    }
})


new Vue({
    el: '#app',
    data: {
        chats: {
            id: '',
            from: '',
            to: '',
            text: '',
            replyText: '',
            replyFrom: '',
            isReply: false,
        },
        errors: {
            from: [],
            to: [],
            text: [],
        },
        showChats: [],
        currentId: 1,
        isAdd: true,
    },
    methods: {
        remove(index) {
            this.chats.splice(index, 1);
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
                this.chats.id = this.currentId;
                this.currentId++;
                this.showChats.push(Vue.util.extend({}, showChats));
                if (this.isReply) {
                    this.isReply = false;
                }
            }
        },
    }
});