<template>
  <div class="header-container">
    <button id="fav-button" @click="navigateToFavoritePage">Favorites</button>

  </div>
</template>

<script>
export default {
    name:"Header",
    methods:{
       navigateToFavoritePage(){
           this.$router.push('/favorites/bootcamp');
       }
    }
}
</script>

<style scoped>
.header-container{
  display: flex;
  justify-content: end;

  margin: 10px;
  padding: 10px 51px;
  background-color: yellow;

}
#fav-button{
  display: flex;
  background-color: beige;
}

</style>