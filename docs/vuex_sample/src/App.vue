<template>
<div>
  <div id="app">
    <div>{{currentCount}}</div>
    <button @click="countUp">Make Ten</button>
    <p>{{currentMessage}}</p>
    <EditForm/>
  </div>
</div>
</template>

<script>
import store from './store'
import EditForm from './components/Editor'
export default {
  name: 'app',
  components: {
    EditForm
  },
  computed: {
    currentCount(){
      return this.$store.getters.currentCount;
    },
    currentMessage(){
      return this.$store.getters.currentMessage;
    },
  },
  created(){
    console.log(this.$store.state.count)
    this.$store.commit('increment')
    //this.$store.commit('mutationType', 5)
  },
  methods: {
    countUp(){
      this.$store.dispatch('actionType', 10)
    }
  }
}
</script>

<style>
#app{
  text-align: center;
  color: rgba(16, 225, 65, 0.592);
  margin: 10px 0
}
</style>
