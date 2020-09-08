import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'
import 'firebase/firestore';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBPsa47vBtpoEVZDNYWy0KJU-YTnHmxyUQ",
  authDomain: "textchat-96e01.firebaseapp.com",
  databaseURL: "https://textchat-96e01.firebaseio.com",
  projectId: "textchat-96e01",
  storageBucket: "textchat-96e01.appspot.com",
  messagingSenderId: "316133054105",
  appId: "1:316133054105:web:c0977d2ea5739867520a08"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  el: '#app',
  render: h => h(App)
})
