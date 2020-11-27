<template>
  <header class="header">
    <b-navbar type="dark" class="navbar" variant="dark">
      <b-container>
        <b-navbar-brand href="#">MovieDB</b-navbar-brand>
        <b-nav-form>
          <b-form-input
            class="mr-sm-2 search-input"
            placeholder="Search"
            v-model="searchValue"
            debounce="500"
          ></b-form-input>
        </b-nav-form>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  data: () => ({
    searchValue: ""
  }),
  watch: {
    searchValue: "onSearchValueChanged"
  },
  methods: {
    ...mapActions("movies", [
      "searchMovie",
      "fetchMovies",
      "toggleSearchState"
    ]),
    onSearchValueChanged(value) {
      if (value) {
        this.searchMovie(value);
        this.toggleSearchState(true);
      } else {
        this.fetchMovies();
        this.toggleSearchState(false);
      }
    }
  }
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.7) im !important;
}

.search-input {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(0, 0, 0, 0.6);
}

.search-input:focus {
  color: #ffffff;
  box-shadow: none;
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(0, 0, 0, 0.6);
}
</style>
