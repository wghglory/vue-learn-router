<template>
  <div>
    Student
    <p>route params id: {{ $route.params.id }}</p>
    <p>If route config has `props:true`, you can get params by props. An easier way</p>
    <button @click="goback">go back</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'Student',
  created() {
    console.log(this.$route);
    console.log(this.id);
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');

    // console.log(to);
    // console.log(from);
    // console.log(next);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');

    // console.log(to);
    // console.log(from);
    // console.log(next);
    next();
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
