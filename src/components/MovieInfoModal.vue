<template>
  <div class="movie-info-wrap">
    <header class="movie-info-header">
      <h6 class="movie-header-title">Movie view</h6>
      <b-icon-x class="close-icon" @click="closeModal" />
    </header>
    <div class="movie-info-content">
      <b-row>
        <b-col sm="4">
          <div class="movie-poster-wrap">
            <div class="movie-poster" :style="posterStyle"></div>
          </div>
        </b-col>
        <b-col sm="8">
          <h3 class="movie-title">{{ movie.Title }}</h3>
          <b-form-rating
            class="movie-rating"
            v-model="movie.imdbRating"
            readonly
            show-value
            precision="1"
            stars="10"
            show-value-max
            no-border
          />
          <p class="movie-description">{{ movie.Plot }}</p>
          <div class="mt-3 mb-4">
            <b-badge variant="success" class="mr-2">{{ movie.Year }}</b-badge>
            <b-badge variant="success" class="mr-2">{{
              movie.Runtime
            }}</b-badge>
            <b-badge variant="success" class="mr-2">{{ movie.Genre }}</b-badge>
            <b-badge variant="success" class="mr-2">{{
              movie.Language
            }}</b-badge>
          </div>
          <table class="table small">
            <tbody>
              <tr>
                <th>Production</th>
                <td>{{ movie.Production }}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{{ movie.Country }}</td>
              </tr>
              <tr>
                <th>Director</th>
                <td>{{ movie.Director }}</td>
              </tr>
              <tr>
                <th>Writer</th>
                <td>{{ movie.Writer }}</td>
              </tr>
              <tr>
                <th>Actors</th>
                <td>{{ movie.Actors }}</td>
              </tr>
              <tr>
                <th>Awards</th>
                <td>{{ movie.Awards }}</td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieInfoModal",
  props: {
    movie: {
      type: Object,
      required: true
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
      return this.movie ? `url(${this.movie.Poster})` : this.defaultPosterBg;
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped>
.movie-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-image: linear-gradient(
    45deg,
    rgb(0, 3, 38) 0%,
    rgb(82, 15, 117) 100%
  );
  color: #ffffff;
}

.movie-header-title {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
}

.movie-info-content {
  padding: 1rem;
  background-color: #ffffff;
}

.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.movie-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
}

.movie-title {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.movie-rating {
  padding: 0;
}

.movie-rating:focus {
  box-shadow: none;
}

.movie-rating >>> .b-rating-star,
.movie-rating >>> .b-rating-value {
  justify-content: flex-start;
  flex-grow: 0 !important;
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0;
}

.movie-rating >>> .b-rating-star + .b-rating-star {
  margin-left: 4px;
}

.movie-rating >>> .b-rating-value {
  margin-left: 10px;
}

.movie-rating >>> .b-rating-star .b-rating-icon {
  color: #ffc107;
}

.movie-description {
  font-size: 1.25rem;
  font-weight: 300;
}

.close-icon {
  font-size: 24px;
  cursor: pointer;
}
</style>
