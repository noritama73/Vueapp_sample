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
                <div v-show="chat.from">From:{{chat.from}}</div>
                <div v-show="chat.to">To:{{chat.to}}</div>
            </div>
            <div class="body">
                <div>{{chat.text}}</div>
                <button class="button-outline" @click.stop.prevent="remove(index)">削除</button>
                <button class="button-outline" @click.stop.prevent="openReply">返信</button>
                <div class="replyBody">
                    <div> >>{{chat.id}} </div>
                    <div>{{replyText}}</div>
                    <replyMessage :value="replyText" @input="replyText = $event" :is-reply="isReply"></replyMessage>
                </div>
            </div>
        </div>
    </div>
    `,
    props: {
        chats: Array,
    },
    data: function () {
        return {
            replyText: '',
            isReply: false,
        }
    },
    methods: {
        remove(index) {
            this.chats.splice(index, 1);
        },
        openReply() {
            this.isReply = true;
        }
    }
})

Vue.component('replyMessage', {
    template: `
    <div>
        <div class="accordion" v-show="isReply">
            <textarea v-model="replyText" rows="5" cols="60" placeholder="返信を入力してください"></textarea>
            <button class="button-outline" @click="childAddReply">送信</button>
        </div>
    </div>
    `,
    props: {
        value: String,
        isReply: Boolean,
    },
    data: () => ({
        replyText: '',
    }),
    methods: {
        childAddReply() {
            this.$emit("input", this.replyText);
            this.isReply = false;
        },
    },
    watch: {
        value: function (newValue) {
            this.replyText = newValue;
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

            /*if (!this.chats.from) {
                this.errors.from.push('送り名が入力されていません');
                isAdd = false;
            }
            if (!this.chats.to) {
                this.errors.to.push('宛名が入力されていません');
                isAdd = false;
            }*/
            if (!this.chats.text) {
                this.errors.text.push('本文が入力されていません');
                isAdd = false;
            }

            if (isAdd) {
                this.chats.id = this.currentId;
                this.currentId++;
                this.showChats.push(Vue.util.extend({}, showChats));
            }
        },
    }
});