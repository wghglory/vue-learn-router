<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/students">Student List</router-link> |
      <router-link to="/students/1">Student 1</router-link> |
      <!-- named route -->
      <router-link :to="{ name: 'StudentDetail', params: { id: 123 } }">Student 123</router-link> |
      <router-link to="/about">About</router-link>

      <button @click="gotoStudent">Go to Student List</button>
      <button @click="gotoStudentDetail">Go to Student 456</button>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    gotoStudent() {
      this.$router.push('students');
    },
    gotoStudentDetail() {
      this.$router.push({
        name: 'StudentDetail',
        params: { id: 456 },
      });
    },
  },
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
