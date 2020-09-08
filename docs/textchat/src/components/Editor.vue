<template>
<div id="home">
  <h1>エディター画面</h1>
  <p>
    <span>{{ user.displayName }}</span>
    <button @click="logout">ログアウト</button>
  </p>

  <transition-group name="chat" tag="div" class="list content">
    <!-- chatにはキー、送信者名、Googleアカウントの画像パス、メッセージが入っています。 -->
    <section v-for="{ key, name, image, message } in chat" :key="key" class="item">
      <div class="item-image"><img :src="image" width="40" height="40"> {{ name }}</div>
      <div class="item-detail">
        <div class="item-message">
          <!-- メッセージがMarkdown書式で表示されます。 -->
          <div v-html="message"></div>
        </div>
      </div>
    </section>
  </transition-group>
 
   <!-- 入力フォーム -->
  <form action="" @submit.prevent="doSend" class="form">
    <!-- Enterを押すとメッセージが送信されます。Enter + Shiftで改行します。 -->
    <textarea
       v-model="input"
       :disabled="!user.uid"
       @keydown.enter.exact.prevent="doSend"></textarea>
    <div>
      <!-- ボタンを押すとメッセージが送信されます -->
      <button type="submit" :disabled="!user.uid" class="send-button">Send</button>
    </div>
    <div>
      プレビュー<div v-html="preview()"></div>
     </div>
  </form>
</div>
</template>
<script>
import firebase from 'firebase'
import marked from "marked";
// 改行を <br> タグに変換するモジュール
export default {
  name: 'editor',
  props: ["user"],
  data() {
    return {
      chat: [],  // 取得したメッセージを入れる配列
      input: ''  // 入力したメッセージ
    }
  },
  created() {
    // データベースからメッセージ情報取得
    const ref_message = firebase.database().ref('message')
    if (this.user) {
      this.chat = []
      // message に変更があったときのハンドラを登録
      ref_message.limitToLast(10).on('child_added', this.childAdded)
    } else {
       // message に変更があったときのハンドラを解除
       ref_message.limitToLast(10).off('child_added', this.childAdded)
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut();
    },
    preview: function() {
      return marked(this.input);
    },
    childAdded(snap) {
      const message = snap.val()
      this.chat.push({
        key: snap.key,
        name: message.name,
        image: message.image,
        message: marked(message.message)
      })
    },
    doSend: function() {
      if (this.user.uid && this.input.length) {
        // firebase にメッセージを追加
        firebase.database().ref('message').push({
          message: marked(this.input),
          name: this.user.displayName,
          image: this.user.photoURL
        }, () => {
          this.input = '' // フォームを空にする
        })
      }
    },
    displayTitle: function(text) {
      return text.split(/\n/)[0];
    }
  }
}
</script>