<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view />
    <router-view name="named-route"></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  components: {
    Navigation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
