<template>
  <div class="container">
    <Header></Header>
    <div class="product-list-container">
      <Product
          v-for="product in products"
          :product="product"
          :key="product.id"
      ></Product>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import Product from "@/components/Product";

export default {
  name: "ProductListingPage",
  components: {Product, Header },
  data(){
    return{
      products: [],
    }
  },
  mounted() {
    axios.get('https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos')
        .then(response => this.products = response.data)

  }
};
</script>

<style>
.container{
  width: 100%;

}
.product-list-container{
  display: flex;

  flex-wrap: wrap;

  align-items: center;

}
</style>