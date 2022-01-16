<template>
<div class="product-container" >
  <div  class="product-img">
    <img  @mouseover="hover = true"
          @mouseleave="hover = false"
          class="product-img" @click="navigateToWatchPage(product.id)" :src="imageSource" :alt="product.ownerName" >

  </div>




  <div class="product-detail">
    <div class="owner-image">
      <img class="owner-img" :src="product.ownerImage" :alt="product.ownerImage" >
    </div>
    <div class="owner-detail">
      <div class="video-title">{{product.title}}</div>
      <div class="owner-name">{{product.ownerName}}</div>
      <div class="video-detail">
        <div class="view-count">{{product.viewCount}} </div>
        ·
        <div class="publish-date-in-month">
           {{product.publishDateInMonth}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object,
  },
  data() {
    return {
      hover: false,
    };
  },
  computed:{
    imageSource(){
      return this.hover ? this.product.hoverImage : this.product.coverImage
    }
  },
  methods: {
    navigateToWatchPage(id) {
      this.$router.push({ path: `/watchpage`, query: {id:id} });

    }
  }
}
</script>

<style scoped>
.product-container{
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 360px;

  margin-left: 15px;

}
.product-img{
  display: flex;
  flex: 3;
  width: 360px;
  height: 200px;
}


.product-detail{
  margin-top: 10px;
  display: flex;
  flex: 2;
  flex-direction: row;

}
.owner-img{
  margin: 10px;
  width: 36px;
  height: 36px;
   border-radius: 50%;
 }
.owner-detail{
  display: flex;
  flex-direction: column;
  font-size: 17px;
}
.video-detail{
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items: start;
  flex-direction: row;
}
</style>