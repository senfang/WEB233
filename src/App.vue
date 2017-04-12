<template>
  <div id="app">
    <router-view></router-view>
    <transition name="fade">
      <router-view name="main" class="container"></router-view>
    </transition>
    <transition name="fade">
      <router-view name="footer"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
