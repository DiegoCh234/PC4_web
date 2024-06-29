<template>
  <div>
    <div class="title-bar">
      <h3 class="list-title">Listado de APOD</h3>
      <img class="nasa-logo" src="/icons/nasa-logo.png" alt="NASA Logo" />
    </div>
    <div class="apod-list">
      <div class="apod-item-wrapper" v-for="apod in apods" :key="apod.date">
        <ApodItem :apod="apod" />
      </div>
    </div>
  </div>
</template>

<script>
import ApodItem from "./ApodItem.vue";

export default {
  name: "ApodList",
  components: {
    ApodItem,
  },
  data() {
    return {
      apodsData: [],
    };
  },
  computed: {
    apods() {
      return this.apodsData;
    },
  },
  mounted() {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      this.apodsData = JSON.parse(storedData);
    }
  },
};
</script>

<style scoped>
.title-bar {
  background-color: #161718;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.list-title {
  font-size: 2.5rem;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
}

.nasa-logo {
  height: 60px;
}

.apod-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.apod-item-wrapper {
  background-color: red;
  padding: 5px;
  border-radius: 8px;
}
</style>
