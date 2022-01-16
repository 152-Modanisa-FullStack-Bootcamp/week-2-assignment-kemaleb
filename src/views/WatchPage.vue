<template>

  <div>

    <h1>{{$route.query.id}}</h1>
  </div>
</template>

<script>
export default {
  name: "WatchPage",
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped>

</style>