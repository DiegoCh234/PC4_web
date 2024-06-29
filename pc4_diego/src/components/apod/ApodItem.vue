<template>
  <div class="apod-item">
    <template v-if="isImage(apod)">
      <div class="image-container">
        <img :src="apod.url" :alt="apod.title" />
      </div>
    </template>
    <template v-else-if="isVideo(apod)">
      <div class="video-container">
        <a :href="apod.url" target="_blank">
          <iframe width="100%" height="315" :src="apod.url" frameborder="0" allowfullscreen></iframe>
        </a>
      </div>
    </template>
    <div class="details">
      <div class="title-and-date">
        <h2 class="apod-title">{{ apod.title }}</h2>
        <p>{{ apod.date }}</p>
      </div>
      <div class="description">
        <p>{{ apod.explanation }}</p>
        <p v-if="apod.copyright" class="copyright">
          <span>by </span>{{ apod.copyright }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApodItem",
  props: {
    apod: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isImage(apod) {
      return /\.(jpg|jpeg|png|gif)$/i.test(apod.url);
    },
    isVideo(apod) {
      return /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)/i.test(apod.url);
    },
  },
};
</script>

<style>
.apod-item {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0;
  color: #333;
}

.apod-item .image-container {
  margin-bottom: 10px;
}

.apod-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.apod-item .video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.apod-item .video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.apod-item .details {
  display: flex;
  flex-direction: column;
  color: #333;
}

.apod-item .title-and-date {
  margin-bottom: 10px;
}

.apod-title {
  font-size: 24px;
  font-family: 'Arial Black', sans-serif;
  color: #000;
  margin-bottom: 5px;
}

.apod-item .title-and-date p {
  font-size: 16px;
  color: #333;
  font-weight: bold;
}

.apod-item .description {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

.apod-item .description .copyright {
  color: #007BFF;
  font-style: italic;
  margin-top: 10px;
}
</style>
