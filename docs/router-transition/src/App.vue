<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/About">About</router-link>
    </nav>
    <transition name="router-transition" enter-active-class="animated zoomIn" leave-active-class="animated bounceOutRight">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";


#app {
  margin: 0 auto;
  max-width: 1000px;
  background: #fff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.page {
  position: fixed; 
  right: 0;
  left: 0;
  width: inherit;
  padding: 0 50px;
}
</style>
