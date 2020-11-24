<template>
  <div class="poster-page-bg" :style="posterStyle"></div>
</template>

<script>
export default {
  name: "PosterBg",
  props: {
    poster: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    defaultPosterBg:
      "linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)"
  }),
  computed: {
    posterStyle() {
      return {
        "background-image": this.posterBg
      };
    },
    posterBg() {
      return this.poster ? `url(${this.poster})` : this.defaultPosterBg;
    }
  }
};
</script>

<style scoped>
.poster-page-bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
}

.poster-page-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.7;
  background-image: linear-gradient(
    45deg,
    rgb(0, 3, 38) 0%,
    rgb(82, 15, 117) 100%
  );
}
</style>
