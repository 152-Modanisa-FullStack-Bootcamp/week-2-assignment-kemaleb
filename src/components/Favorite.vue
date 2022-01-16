<template>
<div class="favorite-container" v-if="favorite.favorite">

  <div  class="favorite-img">
    <img  @mouseover="hover = true"
          @mouseleave=" hover = false"  class="favorite-img2" :src="favorite.coverImage" :alt="favorite.ownerName" >
    <img  v-show="hover"  class="favorite-img"  :src="favorite.hoverImage" :alt="favorite.ownerName" >
  </div>






  <div class="favorite-detail">
    <div class="">{{favorite.title}}</div>
    <div class="video-detail">
      <div class="view-count">{{favorite.viewCount}} </div>
      ·
      <div class="publish-date-in-month">
        {{favorite.publishDateInMonth}}
      </div>
    </div>
    <div class="video-detail">
      <img class="owner-img" :src="favorite.ownerImage" alt="" srcset="">

      <div class="owner-detail">
        {{favorite.ownerName}}
      </div>
    </div>
    <div class="video-desc">{{favorite.description}}</div>
    <div class=""></div>
  </div>

</div>
</template>

<script>
export default {
  name: "Favorite",
  data() {
    return {
      hover: false,
    };
  },
  props: {
    favorite: Object,
  }
}
</script>

<style scoped>
.favorite-container{
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 200px;
  margin: 15px;

}
.favorite-img{
  display: flex;
  flex: 2;
  margin-right: 21px;
  width: 360px;
  height: 200px;
}
.favorite-img2{
  display: flex;
  flex: 2;
  margin-right: 21px;
  width: 360px;
  height: 200px;
}
.favorite-img2:hover{
  display: none;

}
.favorite-detail{
  display: flex;
  flex: 4;
  flex-direction: column;
}
.video-detail{
  display: flex;
  flex-direction: row;
  width: 50px;
  justify-content: space-between;

}
.owner-img{
  margin: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.owner-detail{margin: 10px;}
</style>