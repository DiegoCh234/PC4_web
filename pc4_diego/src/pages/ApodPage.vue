<template>
  <div class="apod-page">
    <div class="apod-list q-mr-md">
      <ApodList />
    </div>
  </div>
</template>

<style scoped>
.apod-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0b3d91;
  color: #ffffff;
  font-family: Arial, sans-serif;
}

.apod-list {
  width: 100%;
}

h3 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>

<script>
import ApodList from "src/components/apod/ApodList.vue";

export default {
  name: "ApodPage",
  components: {
    ApodList,
  },
};
</script>
