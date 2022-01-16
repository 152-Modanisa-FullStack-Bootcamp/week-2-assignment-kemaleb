<template>
  <div class="container">
    <Header></Header>
    <div class="favorite-list-container">
      <Favorite

          v-for="favorite in favorites"
          :favorite="favorite"
          :key="favorite.id"

      ></Favorite>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import Favorite from "@/components/Favorite";

export default {
name: "FavoritesPage",
  components: { Favorite, Header },
  data(){
    return{
      favorites: [],
    }
  },
  mounted() {
    axios.get('https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos')
        .then(response => this.favorites = response.data)

  }
};
</script>

<style>
.container{
  width: 100%;

}
.favorite-list-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  align-items: center;

}
</style>