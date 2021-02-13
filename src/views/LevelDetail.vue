<template>
  <div>
    <div>
      <button @click="handleGoBack">go back</button>
    </div>
    <el-container>
      <el-header>{{ levelInfo.name }}</el-header>
      <el-main>
        <img :src="require(`@/assets/${levelInfo.image}`)" :alt="levelInfo.name" />
        <p>{{ levelInfo.description }}</p>
      </el-main>
      <el-footer>
        <router-link :to="{ name: 'secretDetail', params: { secret: levelInfo.secret } }">彩蛋</router-link>
        <router-view></router-view>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import store from '@/store.js';

export default {
  props: {
    levelId: String,
  },
  methods: {
    handleGoBack() {
      this.$router.go(-1);
    },
  },

  computed: {
    levelInfo() {
      return store.levels.find((info) => {
        return info.id === this.levelId;
      });
    },
  },
};
</script>

<style scoped></style>
