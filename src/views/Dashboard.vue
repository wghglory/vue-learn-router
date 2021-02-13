<template>
  <div>
    <h1>
      All Level
    </h1>
    <div class="destinations">
      <div v-for="level in levels" :key="level.name">
        <router-link :to="{ name: 'LevelDetail', params: { levelId: level.id } }">
          <h2>{{ level.name }}</h2>
        </router-link>

        <figure>
          <router-link :to="{ name: 'LevelDetail', params: { levelId: level.id } }">
            <img :src="require(`@/assets/${level.image}`)" :alt="level.name" />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store.js';

export default {
  data() {
    return {
      levels: store.levels,
    };
  },
};
</script>

<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
a {
  color: lightseagreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
</style>
